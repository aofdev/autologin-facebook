const timeout = 11000
const facebook = require('../login_facebook')

describe(
  'Test Login',
  () => {
    let page
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await facebook.LOGIN(page, '', '') // username, paswword
    }, timeout)

    afterAll(async () => {
      await page.close()
    })

    it('should load without error', async () => {
      const name = await page.evaluate(() => document.querySelector('span._1vp5').textContent)
      expect(name).toContain('') // name facebook
    })
  },
  timeout
)