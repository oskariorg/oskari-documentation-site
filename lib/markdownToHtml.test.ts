
import { BADGE_TEMPLATES, mdToHtml } from "./customMarked";
import { processAllLinks, processInternalMDLinks, processMigrationGuideLinks, updateMarkdownHtmlStyleTags, updateMarkdownImagePaths } from "./markdownToHtml";

import slugify from 'slugify';

const createTestMd = () => {
  const originals = [];
  const expecteds = [];
  for (let first = 1; first < 4; first++) {
    originals.push('# ' + first + '\r\n')
    expecteds.push('<h1 id="'+first+'">' + first + ' ' + first + '</h1>\r\n')
    for (let second = 1; second < 4; second++) {
      const joinedSecond = [first, second].join('.');
      originals.push('## ' + joinedSecond + '\r\n')
      expecteds.push('<h2 id="' + joinedSecond + '">' + joinedSecond + ' ' + joinedSecond + '</h2>\r\n')
      for (let third = 1; third < 4; third++) {
        const joinedThird = [first, second, third].join('.');
        originals.push('### ' + joinedThird + '\r\n')
        expecteds.push('<h3 id="' + joinedThird + '">' + joinedThird + ' ' + joinedThird + '</h3>\r\n')
      }
    }
  }

  return {
    originals,
    expecteds
  }
}


describe('mdToHTML tests', () => {
  describe('insert ids to headers tests', () => {
    it('should prefix heading with "1" and have the slug as id', () => {
      const h1Content = 'FUU FUU FUU FUU';
      const h1ExpectedContent = '1 FUU';
      const h1ExpectedId = 'id="'+slugify(h1Content)+'"';
      const originalMd = '# '+h1Content;

      const processedHTML = mdToHtml(originalMd, true, '1');
      expect(processedHTML?.html?.indexOf(h1ExpectedContent)).toBeGreaterThan(-1);
      expect(processedHTML?.html?.indexOf(h1ExpectedId)).toBeGreaterThan(-1);
    });

    it('should handle headings\' semantic numbering', () => {

      const generated = createTestMd();
      // <div><h1>1</h1><h2>1.1</h2>.....
      const originalMd = generated.originals.join('');
      // <div><h1 id="1">1 1</h1><h2 id="1.1">1.1 1.1</h2>....
      const expectedHtml = generated.expecteds.join('');

//      console.log(originalMd);
//      console.log(expectedHtml);
      const processedHTML = mdToHtml(originalMd, true, '1').html;
      expect(processedHTML).toEqual(expectedHtml);
    });

    it('should NOT allow zeros in semantic numbering (case skipping heading levels)', () => {
      const h1 = '# FUU\r\n';
      const h3 = '### FUU\r\n';
      const processed = mdToHtml(h1 + h3, true, '1').html;
      expect(processed.indexOf('1.0.1')).toBe(-1);
      expect(processed.indexOf('1.1.1')).toBeGreaterThan(-1);
    })

    it('should be capapble of handling very many levels of headings', () => {
      const h1 = '# FUU\r\n';
      const h2 = '## FUU\r\n';
      const h3 = '### FUU\r\n';
      const h4 = '#### FUU\r\n';
      const h5 = '##### FUU\r\n';
      const h6 = '###### FUU\r\n';

      const expectedH1 = '<h1 id="FUU">FUU</h1>\r\n';
      const expectedH2 = '<h2 id="FUU">FUU</h2>\r\n';
      const expectedH3 = '<h3 id="FUU">FUU</h3>\r\n';
      const expectedH4 = '<h4 id="FUU">FUU</h4>\r\n';
      const expectedH5 = '<h5 id="FUU">FUU</h5>\r\n';
      const expectedH6 = '<h6 id="FUU">FUU</h6>\r\n';

      expect(mdToHtml(h1, false).html).toBe(expectedH1);
      expect(mdToHtml(h2, false).html).toBe(expectedH2);
      expect(mdToHtml(h3, false).html).toBe(expectedH3);
      expect(mdToHtml(h4, false).html).toBe(expectedH4);
      expect(mdToHtml(h5, false).html).toBe(expectedH5);
      expect(mdToHtml(h6, false).html).toBe(expectedH6);
    })
  });

  describe('update markdown image paths', () => {
    it('should replace md image path with given runtime path', () => {
      const originalPath = 'stuff/things/etc/common/';
      const originalMd = '![FUU]('+originalPath+'image.png)';
      const runtimePath = '/assets/docs/images'
      const expected = '![FUU](' + runtimePath + '/' + originalPath + 'image.png)';
      const processed = updateMarkdownImagePaths(originalMd, runtimePath);
      expect(processed).toEqual(expected);
    });

    it('should replace reserved keyword \'resources\' from original path (case documentation)', () => {
      const originalPath = '/resources/images/backend/';
      const originalMd = '![FUU]('+originalPath+'image.png)';
      const runtimePath = '/assets/docs/2.13.0/resources/'
      const expected = '![FUU](' + runtimePath + 'images/backend/image.png)';
      const processed = updateMarkdownImagePaths(originalMd, runtimePath);
      expect(processed).toEqual(expected);
    });
  });

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

  describe('processing headers', () => {
    it ('should keep headings with no tags unchanged', () => {
      const h1 = '# FUU';
      const expectedh1 = '<h1 id="FUU">FUU</h1>';
      const h2 = '## FUU2';
      const expectedh2 = '<h2 id="FUU2">FUU2</h2>';
      const h3 = '### FUU3';
      const expectedh3 = '<h3 id="FUU3">FUU3</h3>';

      expect(mdToHtml(h1, false).html.indexOf(expectedh1)).toBe(0);
      expect(mdToHtml(h2, false).html.indexOf(expectedh2)).toBe(0);
      expect(mdToHtml(h3, false).html.indexOf(expectedh3)).toBe(0);
    });

    it ('should be able to recognize given tags', () => {
      const h1 = '# [rpc] FUU';
      const expectedh1 = '<h1 id="FUU">FUU' + BADGE_TEMPLATES['[rpc]'] + '</h1>';
      const h2 = '## [add] FUU2';
      const expectedh2 = '<h2 id="FUU2">FUU2' + BADGE_TEMPLATES['[add]'] + '</h2>';
      const h3 = '### [rem] FUU3';
      const expectedh3 = '<h3 id="FUU3">FUU3' + BADGE_TEMPLATES['[rem]'] + '</h3>';
      const h4 = '#### [mod] FUU4';
      const expectedh4 = '<h4 id="FUU4">FUU4' + BADGE_TEMPLATES['[mod]'] + '</h4>';
      const h5 = '##### [breaking] FUU5';
      const expectedh5 = '<h5 id="FUU5">FUU5' + BADGE_TEMPLATES['[breaking]'] + '</h5>';

      expect(mdToHtml(h1, false).html.indexOf(expectedh1)).toBe(0);
      expect(mdToHtml(h2, false).html.indexOf(expectedh2)).toBe(0);
      expect(mdToHtml(h3, false).html.indexOf(expectedh3)).toBe(0);
      expect(mdToHtml(h4, false).html.indexOf(expectedh4)).toBe(0);
      expect(mdToHtml(h5, false).html.indexOf(expectedh5)).toBe(0);
    });

    it ('should handle multiple tags per heading', () => {
      const h1 = '# [rem][add][mod][breaking][rpc] FUU';

      const processed = mdToHtml(h1, false).html;
      expect(processed.indexOf('[add]')).toBe(-1);
      expect(processed.indexOf('[mod]')).toBe(-1);
      expect(processed.indexOf('[rem]')).toBe(-1);
      expect(processed.indexOf('[rpc]')).toBe(-1);
      expect(processed.indexOf('[breaking]')).toBe(-1);

      expect(processed.indexOf(BADGE_TEMPLATES['[add]'])).toBeGreaterThan(-1);
      expect(processed.indexOf(BADGE_TEMPLATES['[mod]'])).toBeGreaterThan(-1);
      expect(processed.indexOf(BADGE_TEMPLATES['[rem]'])).toBeGreaterThan(-1);
      expect(processed.indexOf(BADGE_TEMPLATES['[rpc]'])).toBeGreaterThan(-1);
      expect(processed.indexOf(BADGE_TEMPLATES['[breaking]'])).toBeGreaterThan(-1);
    });

    it('should add \r\n after a heading to avoid problems resulting from a "missing" paragraph', () => {
      const h1 = '# FUU';
      const expectedh1 = '<h1 id="FUU">FUU</h1>';
      const expectedSuffix = '\r\n';
      const processed = mdToHtml(h1, false).html;
      expect(processed).toContain(expectedh1);
      expect(processed).toContain(expectedSuffix);
    })
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
});