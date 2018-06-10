const puppeteer = require('puppeteer')

const self = module.exports = {
  LOGIN: async (page, username, password) => {
    await page.goto('https://www.facebook.com/login')
    const emailField = await page.$('input[name=email]')
    await emailField.click()
    await emailField.type(username)
    await emailField.dispose()
    const passwordField = await page.$('input[name=pass]')
    await passwordField.click()
    await passwordField.type(password)
    await passwordField.dispose()
    const loginButton = await page.$('button[name=login]')
    await loginButton.focus()
    await loginButton.click()
    await loginButton.dispose()
    await page.waitForNavigation()
  },

  main: async () => {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--disable-notifications']
    })
    const page = await browser.newPage()
    await page.setViewport({
      width: 1200,
      height: 900
    })
    await self.LOGIN(page, '', '') // username, paswword
  }
}

// if run testing give comment line this
// self.main()