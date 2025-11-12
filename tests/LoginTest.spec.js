const { test } = require('@playwright/test')
const { POManager } = require('../pageobjects/POManager')
const dataset = JSON.parse(JSON.stringify(require('../testdata/credentials.json')))


test(`Login to Unified Portal With Account - ${dataset.username}`, async ({ page }) => {
    await page.goto(process.env.appUrl)
    const poManager = new POManager(page)
    const LoginPage = poManager.getLoginPage()
    await LoginPage.appLogin(dataset.username, dataset.password, dataset.otp)
    const HomePage = poManager.getHomePage()
    await HomePage.validateSuccessfullLogin()
    await HomePage.appLogout()
});