import { MarkdownFileMetadata } from '@/types/types';
import slugify from 'slugify';
import 'highlight.js/scss/a11y-dark.scss';

export const updateMarkdownHtmlStyleTags = (markdownString: string): string => {
  const regex = /"([^"]*)"/g;

  function replaceFunc(match: string, content: string) {
      const replacedContent = content.replace(/</g, '{{').replace(/>/g, '}}');
      return `"${replacedContent}"`;
  }

  const result = markdownString.replace(regex, replaceFunc);

  return result;
}

export const processAllLinks = (markdownContent: string): string => {
  // eslint-disable-next-line no-useless-escape
  const linkRegex = /(?<!\!)\[([^\]]+)\]\(([^)]+)\)/g;
  const result = markdownContent.replaceAll(linkRegex, (match, linkText, linkUrl) => {
    // marked is constantly failing to recognize relative md-style links as links so we're using html here.
    return `<a href="${linkUrl}">${linkText}</a>`;
  });
  return result;

}

export const processMigrationGuideLinks = (markdownContent: string): string => {
  const regex = /\[(.*?)\]\((MigrationGuide.md)\)/g;
  const slugified = slugify('Migration guide');
  const result = markdownContent.replaceAll(regex, (match, linkText) => {
    // marked is constantly failing to recognize relative md-style links as links so we're using html here.
    return `<a href="#${slugified}">${linkText}</a>`;
  });
  return result;
}

/**
 * Creates a slugified url for use in documentation section
 * @param {string} url Original href of link
 * @param {Object[]} indexJSON The metadata JSON-structure of the documentation
 * @param {string} activeSectionTitle Title of the active section when linking within same folder
 * @returns {string} Return a new anchor to use as href
 */
const createSlugifiedUrlToAnchor = (url: string, indexJSON: MarkdownFileMetadata[], activeSectionTitle: string) => {
  if (url.startsWith('../')) {
    url = url.replace('../', '');
  }
  const urlParts = url.split('/');
  const fileName = urlParts.pop();
  const directory = decodeURIComponent(urlParts.length > 0 ? urlParts.join('/') : '');
  const findChildAnchor = (children: MarkdownFileMetadata[], fileName: string) => {
    const child = children.find(child => child.fileName === fileName);
    return child ? child.anchor : null;
  };

  if (!fileName) {
    return '';
  }

  // No path provided -> find active section by title
  if (!directory) {
      const activeSection = indexJSON.find(item => item.title === activeSectionTitle);
      if (activeSection) {
          const anchor = findChildAnchor(activeSection.children, fileName);
          if (anchor) {
            return `${activeSection.slug}#${anchor}`;
          }

          //console.log('No corresponding anchor found under active section: ', activeSectionTitle, fileName);
      }
  } else {
      // Find section corresponding to path
      const matchingTopLevel = indexJSON.find(item => item.title === directory);
      if (matchingTopLevel) {
        const anchor = findChildAnchor(matchingTopLevel.children, fileName);
        if (anchor) {
          return `${matchingTopLevel.slug}#${anchor}`;
        }

        //console.log('No corresponding anchor found under section: ', matchingTopLevel, fileName);
      }
  }

  return url;
}

/**
 * Find relative links to .md docs in content and replace href with an anchor we've parsed in documentation metadata
 * @param {string} markdownContent - The content of the markdown file
 * @param {JSON-object} indexJSON documentation version full metadata
 * @param {activeSectionTitle} title of current section when linking within the same folder
 * @returns {string} content with links replaced
 */
export const processInternalMDLinks = (markdownContent: string, indexJSON: MarkdownFileMetadata[], activeSectionTitle: string): string => {
  // Regular expression to match Markdown links
  const relativeLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const replacedContent = markdownContent.replace(relativeLinkRegex, (match, text, url) => {
      // Check if the URL is a relative link ending with .md
      if (url.endsWith('.md') && !url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('www.')) {
          const anchor = createSlugifiedUrlToAnchor(url, indexJSON, activeSectionTitle);
          return `[${text}](${anchor})`;
      }
      // Return the original match if it's not a relative .md link
      return match;
  });

  return replacedContent;
}

