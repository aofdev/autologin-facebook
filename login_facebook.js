const puppeteer = require('puppeteer');

const LOGIN = async (page) => {
  const USER = {
    username : "",
    password : ""
  }

  const emailField = await page.$('input[name=email]');
  await emailField.click({ delay: 100 });
  await emailField.type(USER.username, { delay: 100 });
  await emailField.dispose();

  const passwordField = await page.$('input[name=pass]');
  await passwordField.click({ delay: 100 });
  await passwordField.type(USER.password, { delay: 100 });
  await passwordField.dispose();

  const loginButton = await page.$('button[name=login]');
  await loginButton.focus();
  await loginButton.click({ delay: 100 });
  await loginButton.dispose();
  await page.waitForNavigation();
}

async function run() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.setViewport({width: 1200, height: 900});
    await page.goto('https://www.facebook.com/login');
    await LOGIN(page);
  }

run();