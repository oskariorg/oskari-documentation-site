
import { processAllLinks, processInternalMDLinks, processMigrationGuideLinks, updateMarkdownHtmlStyleTags } from "./markdownToHtml";

describe('replace html style tags', () => {
  it ('should replace < and > with {{ and }} for content inside quotation marks', () => {
    const tagged = '"<fuu>"';
    const expected = '"{{fuu}}"';
    expect(updateMarkdownHtmlStyleTags(tagged)).toEqual(expected);
  });

  it ('should leave < and > unharmed when NOT inside quotation marks', () => {
    const tagged = '<fuu>';
    expect(updateMarkdownHtmlStyleTags(tagged)).toEqual(tagged);
  });
});

describe('Link to migration guide', () => {
  it('should replace migration guide link with anchor', () => {
    const markdown = `[Migrationguide](MigrationGuide.md)`;
    const markdownAfter = `<a href="#Migration-guide">Migrationguide</a>`;
    const processed = processMigrationGuideLinks(markdown).trim();
    expect(processed).toEqual(markdownAfter);
  });

  it('should leave link with absolute path alone', () => {
    const markdown = `[Migrationguide](http://www.migrationguideland.com/MigrationGuide.md)`;
    const processed = processMigrationGuideLinks(markdown).trim();
    expect(processed).toEqual(markdown);
  });
})

describe('Rest of the links', () => {
  it('should replace md-style link with anchor', () => {
    const markdown = `[Some link text](http://somelink.com)`;
    const markdownAfter = `<a href="http://somelink.com">Some link text</a>`;
    const processed = processAllLinks(markdown).trim();
    expect(processed).toEqual(markdownAfter);
  });

  it('should leave imagelink alone', () => {
    const markdown = `![Some image](http://someimage.com)`;
    const processed = processAllLinks(markdown).trim();
    expect(processed).toEqual(markdown);
  });
})

describe("processInternalMDLinks", function() {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const indexJSON: any[] = [
    {
      "slug": "section-one",
      "title": "Section One",
      "children": [
        {
          "fileName": "file1.md",
          "anchor": "anchor1"
        },
        {
          "fileName": "file2.md",
          "anchor": "anchor2"
        }
      ]
    },
    {
      "slug": "section-two",
      "title": "Section Two",
      "children": [
        {
          "fileName": "file3.md",
          "anchor": "anchor3"
        },
        {
          "fileName": "file4.md",
          "anchor": "anchor4"
        }
      ]
    }
  ];

  it("replaces a relative link with the correct link from indexJSON", function() {
    const markdownContent = "Check this [link](file1.md) in the content.";
    const activeSectionTitle = "Section One";
    const result = processInternalMDLinks(markdownContent, indexJSON, activeSectionTitle);
    expect(result).toBe("Check this [link](section-one#anchor1) in the content.");
  });

  it("does not replace external links", function() {
    const markdownContent = "Visit [Google](https://www.google.com) for more info.";
    const activeSectionTitle = "Section One";
    const result = processInternalMDLinks(markdownContent, indexJSON, activeSectionTitle);
    expect(result).toBe("Visit [Google](https://www.google.com) for more info.");
  });

  it("replaces a relative link with a path and correct link from indexJSON", function() {
    const markdownContent = "More info [here](../Section Two/file3.md).";
    const activeSectionTitle = "Section One";
    const result = processInternalMDLinks(markdownContent, indexJSON, activeSectionTitle);
    expect(result).toBe("More info [here](section-two#anchor3).");
  });

  it("replaces a relative encoded link with a path and correct link from indexJSON", function() {
    const markdownContent = "More info [here](../Section%20Two/file3.md).";
    const activeSectionTitle = "Section One";
    const result = processInternalMDLinks(markdownContent, indexJSON, activeSectionTitle);
    expect(result).toBe("More info [here](section-two#anchor3).");
  });

  it("does not replace a link if no matching file is found in indexJSON", function() {
    const markdownContent = "Check this [link](nonexistent.md) in the content.";
    const activeSectionTitle = "Section One";
    const result = processInternalMDLinks(markdownContent, indexJSON, activeSectionTitle);
    expect(result).toBe("Check this [link](nonexistent.md) in the content.");
  });

  it("handles multiple links in the same content", function() {
    const markdownContent = "Links: [file1](file1.md), [file4](../Section Two/file4.md), and [external](https://www.example.com).";
    const activeSectionTitle = "Section One";
    const result = processInternalMDLinks(markdownContent, indexJSON, activeSectionTitle);
    expect(result).toBe("Links: [file1](section-one#anchor1), [file4](section-two#anchor4), and [external](https://www.example.com).");
  });

  it("leaves content unchanged if there are no links", function() {
    const markdownContent = "This content has no links.";
    const activeSectionTitle = "Section One";
    const result = processInternalMDLinks(markdownContent, indexJSON, activeSectionTitle);
    expect(result).toBe("This content has no links.");
  });
});
