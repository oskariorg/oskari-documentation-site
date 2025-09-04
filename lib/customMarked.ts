import { marked } from 'marked'
import hljs from 'highlight.js';
import 'highlight.js/scss/a11y-dark.scss';
import slugify from 'slugify';
import { DocAnchorLinksType } from '@/types/types';

marked.use({
    gfm: true,
})

export const MERMAID_SNIPPET = '<pre class="mermaid">'
const tagRegex = /\[(.*?)\]/g;
export const BADGE_TEMPLATES: {[key: string]: string} = {
    '[add]': '<span class="label label-primary add" title="Added"><i class="fa-solid fa-plus"></i></span>',
    '[mod]': '<span class="label label-primary mod" title="Modified"><i class="fa-solid fa-pen"></i></span>',
    '[rem]': '<span class="label label-primary rem" title="Removed"><i class="fa-solid fa-trash-can"></i></span>',
    '[breaking]': '<span class="label label-primary breaking" title="Breaking change. Not backwards compatible."><i class="fa-solid fa-triangle-exclamation"></i></span>',
    '[rpc]': '<span class="label label-primary rpc" title="Available via RPC">RPC</span>',
};
const HREF_BUTTON_TITLE = "Link to section";

const createRenderer = (useSectionNumbering: boolean, startingSectionNumber: string, anchorLinks: Array<DocAnchorLinksType>) => {
    const renderer = new marked.Renderer();
    const sectionCounter = [parseInt(startingSectionNumber) - 1, 0, 0, 0, 0, 0];
    let previousLevel = parseInt(startingSectionNumber) - 1;

    renderer.code = (code: string, infostring?: string): string => {
        if (infostring && infostring === 'mermaid') {
          return `<pre class="mermaid">${code}</pre>`;
        } else if (infostring) {
          return `<pre><code class="language-${infostring} hljs">${hljs.highlightAuto(code).value}</code></pre>`;
        }

        return `<pre><code>${code}</code></pre>`;
    };

    renderer.heading = (content, level): string => {
        const intLevel = level;
        sectionCounter[intLevel - 1]++;
        if (intLevel < previousLevel) {
            for (let i = intLevel; i < sectionCounter.length; i++) {
                sectionCounter[i] = 0;
            }
        }
        previousLevel = intLevel;

        const tags = content.match(tagRegex);
        let titleText = content.replace(tagRegex, '').trim();

        const slug = slugify(titleText)
        const sectionNumber = sectionCounter.slice(0, level).map(sectionNumber => sectionNumber || 1).join('.');

        const sectionNumberContent = useSectionNumbering ? sectionNumber + ' ' : '';
        anchorLinks.push({ level: level.toString(), content, slug, sectionNumber });

        let badges: (string | null)[] = [];
        if (tags && tags.length > 0) {
          badges = tags.map((tag: string) => {
            if (!!BADGE_TEMPLATES[tag.toLowerCase()]) {
              return BADGE_TEMPLATES[tag.toLowerCase()];
            }
            return null;
          }).filter((badge: string | null) => !!badge);
        }

        let cleanTitle = `<h${level} id="${slug}">`;
        cleanTitle += `${sectionNumberContent}${titleText}${badges?.join(' ') || ''}`;

        // when there are numbered headings (case documentation) additional link-button is added
        if (useSectionNumbering) {
          cleanTitle +=
            `<button title="${HREF_BUTTON_TITLE}" class="updateHrefButton" onclick="window.location.hash = '${slug}'">
              <i class="fa-regular fa-link"></i>
            </button>`;
        }

        cleanTitle += `</h${level}>`;

        // additional \r\n needs to be added cos marked is failing in a load of ways,
        // when the first element after heading is a link or a list or whatnot and this is missing in source.
        return cleanTitle + '\r\n';
    }

    return renderer;
}


export const mdToHtml = (src: string, useSectionNumbering: boolean = false, startingSectionNumber: string = '1') => {
    // Just a wrapper for marker renderer so we could tune how different html-tags are processed
    // but most of the special handling is in markdownToHtml.ts
    const anchorLinks: Array<DocAnchorLinksType> = [];
    const renderer = createRenderer(useSectionNumbering, startingSectionNumber, anchorLinks);
    const html = marked(src, { renderer: renderer });
    return {
        html,
        anchorLinks
    }
};
