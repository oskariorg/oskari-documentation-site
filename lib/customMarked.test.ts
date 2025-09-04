import slugify from 'slugify'
import { BADGE_TEMPLATES, mdToHtml } from './customMarked'

const createTestMd = () => {
  const originals = []
  const expecteds = []
  for (let first = 1; first < 4; first++) {
    originals.push('# ' + first + '\r\n')
    expecteds.push(
      '<h1 id="' + first + '">' + first + ' ' + first + '</h1>\r\n'
    )
    for (let second = 1; second < 4; second++) {
      const joinedSecond = [first, second].join('.')
      originals.push('## ' + joinedSecond + '\r\n')
      expecteds.push(
        '<h2 id="' +
          joinedSecond +
          '">' +
          joinedSecond +
          ' ' +
          joinedSecond +
          '</h2>\r\n'
      )
      for (let third = 1; third < 4; third++) {
        const joinedThird = [first, second, third].join('.')
        originals.push('### ' + joinedThird + '\r\n')
        expecteds.push(
          '<h3 id="' +
            joinedThird +
            '">' +
            joinedThird +
            ' ' +
            joinedThird +
            '</h3>\r\n'
        )
      }
    }
  }

  return {
    originals,
    expecteds,
  }
}

describe('mdToHTML tests', () => {
  describe('test rendering headings', () => {
    it('should prefix heading with "1" and have the slug as id', () => {
      const h1Content = 'FUU FUU FUU FUU'
      const h1ExpectedContent = '1 FUU'
      const h1ExpectedId = 'id="' + slugify(h1Content) + '"'
      const originalMd = '# ' + h1Content

      const processedHTML = mdToHtml(originalMd, true, '1')
      expect(processedHTML?.html?.indexOf(h1ExpectedContent)).toBeGreaterThan(
        -1
      )
      expect(processedHTML?.html?.indexOf(h1ExpectedId)).toBeGreaterThan(-1)
    })

    it("should handle headings' semantic numbering", () => {
      const generated = createTestMd()
      // <div><h1>1</h1><h2>1.1</h2>.....
      const originalMd = generated.originals.join('')
      // <div><h1 id="1">1 1</h1><h2 id="1.1">1.1 1.1</h2>....
      const expectedHtml = generated.expecteds.join('')

      //      console.log(originalMd);
      //      console.log(expectedHtml);
      const processedHTML = mdToHtml(originalMd, true, '1').html
      expect(processedHTML).toEqual(expectedHtml)
    })

    it('should NOT allow zeros in semantic numbering (case skipping heading levels)', () => {
      const h1 = '# FUU\r\n'
      const h3 = '### FUU\r\n'
      const processed = mdToHtml(h1 + h3, true, '1').html
      expect(processed.indexOf('1.0.1')).toBe(-1)
      expect(processed.indexOf('1.1.1')).toBeGreaterThan(-1)
    })

    it('should be capapble of handling very many levels of headings', () => {
      const h1 = '# FUU\r\n'
      const h2 = '## FUU\r\n'
      const h3 = '### FUU\r\n'
      const h4 = '#### FUU\r\n'
      const h5 = '##### FUU\r\n'
      const h6 = '###### FUU\r\n'

      const expectedH1 = '<h1 id="FUU">FUU</h1>\r\n'
      const expectedH2 = '<h2 id="FUU">FUU</h2>\r\n'
      const expectedH3 = '<h3 id="FUU">FUU</h3>\r\n'
      const expectedH4 = '<h4 id="FUU">FUU</h4>\r\n'
      const expectedH5 = '<h5 id="FUU">FUU</h5>\r\n'
      const expectedH6 = '<h6 id="FUU">FUU</h6>\r\n'

      expect(mdToHtml(h1, false).html).toBe(expectedH1)
      expect(mdToHtml(h2, false).html).toBe(expectedH2)
      expect(mdToHtml(h3, false).html).toBe(expectedH3)
      expect(mdToHtml(h4, false).html).toBe(expectedH4)
      expect(mdToHtml(h5, false).html).toBe(expectedH5)
      expect(mdToHtml(h6, false).html).toBe(expectedH6)
    })

    it('should keep headings with no tags unchanged', () => {
      const h1 = '# FUU'
      const expectedh1 = '<h1 id="FUU">FUU</h1>'
      const h2 = '## FUU2'
      const expectedh2 = '<h2 id="FUU2">FUU2</h2>'
      const h3 = '### FUU3'
      const expectedh3 = '<h3 id="FUU3">FUU3</h3>'

      expect(mdToHtml(h1, false).html.indexOf(expectedh1)).toBe(0)
      expect(mdToHtml(h2, false).html.indexOf(expectedh2)).toBe(0)
      expect(mdToHtml(h3, false).html.indexOf(expectedh3)).toBe(0)
    })

    it('should be able to recognize given tags', () => {
      const h1 = '# [rpc] FUU'
      const expectedh1 = '<h1 id="FUU">FUU' + BADGE_TEMPLATES['[rpc]'] + '</h1>'
      const h2 = '## [add] FUU2'
      const expectedh2 =
        '<h2 id="FUU2">FUU2' + BADGE_TEMPLATES['[add]'] + '</h2>'
      const h3 = '### [rem] FUU3'
      const expectedh3 =
        '<h3 id="FUU3">FUU3' + BADGE_TEMPLATES['[rem]'] + '</h3>'
      const h4 = '#### [mod] FUU4'
      const expectedh4 =
        '<h4 id="FUU4">FUU4' + BADGE_TEMPLATES['[mod]'] + '</h4>'
      const h5 = '##### [breaking] FUU5'
      const expectedh5 =
        '<h5 id="FUU5">FUU5' + BADGE_TEMPLATES['[breaking]'] + '</h5>'

      expect(mdToHtml(h1, false).html.indexOf(expectedh1)).toBe(0)
      expect(mdToHtml(h2, false).html.indexOf(expectedh2)).toBe(0)
      expect(mdToHtml(h3, false).html.indexOf(expectedh3)).toBe(0)
      expect(mdToHtml(h4, false).html.indexOf(expectedh4)).toBe(0)
      expect(mdToHtml(h5, false).html.indexOf(expectedh5)).toBe(0)
    })

    it('should handle multiple tags per heading', () => {
      const h1 = '# [rem][add][mod][breaking][rpc] FUU'

      const processed = mdToHtml(h1, false).html
      expect(processed.indexOf('[add]')).toBe(-1)
      expect(processed.indexOf('[mod]')).toBe(-1)
      expect(processed.indexOf('[rem]')).toBe(-1)
      expect(processed.indexOf('[rpc]')).toBe(-1)
      expect(processed.indexOf('[breaking]')).toBe(-1)

      expect(processed.indexOf(BADGE_TEMPLATES['[add]'])).toBeGreaterThan(-1)
      expect(processed.indexOf(BADGE_TEMPLATES['[mod]'])).toBeGreaterThan(-1)
      expect(processed.indexOf(BADGE_TEMPLATES['[rem]'])).toBeGreaterThan(-1)
      expect(processed.indexOf(BADGE_TEMPLATES['[rpc]'])).toBeGreaterThan(-1)
      expect(processed.indexOf(BADGE_TEMPLATES['[breaking]'])).toBeGreaterThan(
        -1
      )
    })

    it('should add \r\n after a heading to avoid problems resulting from a "missing" paragraph', () => {
      const h1 = '# FUU'
      const expectedh1 = '<h1 id="FUU">FUU</h1>'
      const expectedSuffix = '\r\n'
      const processed = mdToHtml(h1, false).html
      expect(processed).toContain(expectedh1)
      expect(processed).toContain(expectedSuffix)
    })
  })

  describe('update markdown image paths', () => {
    it('should replace md image path with given runtime path', () => {
      const originalPath = 'stuff/things/etc/common/';
      const originalMd = '![FUU]('+originalPath+'image.png)';
      const runtimePath = '/assets/docs/images'
      const expected ='<img src="' + runtimePath + '/' + originalPath + 'image.png" alt="FUU"/>';
      const processed = mdToHtml(originalMd, false, '1', runtimePath).html;
      expect(processed).toContain(expected);
    });

    it('should replace reserved keyword \'resources\' from original path (case documentation)', () => {
      const originalPath = '/resources/images/backend/';
      const originalMd = '![FUU]('+originalPath+'image.png)';
      const runtimePath = '/assets/docs/2.13.0/resources/'
      const expected ='<img src="' + runtimePath + 'images/backend/image.png" alt="FUU"/>';
      const processed = mdToHtml(originalMd, false, '1', runtimePath).html;
      expect(processed).toContain(expected);
    });
  });
})
