const { test } = require('@playwright/test')
const { POManager } = require('../pageobjects/POManager')
const dataset = JSON.parse(JSON.stringify(require('../testdata/accountInformation.json')))


test(`Sign Up And Login For New Account - ${dataset.email}`, async ({ page }) => {
    await page.goto(process.env.appUrl)
    const poManager = new POManager(page)
    const HomePage = poManager.getHomePage()
    await HomePage.navigateToSignUpAndLoginPage()
    const SignUpAndLoginPage = poManager.getSignUpAndLoginPage()
    await SignUpAndLoginPage.signUpForNewAcount(dataset.name, dataset.email)
    await SignUpAndLoginPage.registeringNewAcountInformation(dataset.password, dataset.year, dataset.month, dataset.day, dataset.firstName, dataset.lastName, dataset.company, dataset.address, dataset.country, dataset.state, dataset.city, dataset.zipCode, dataset.mobileNumber)
    await SignUpAndLoginPage.validateSuccessfullSignUp()
    await HomePage.accountLogout()
    await SignUpAndLoginPage.loginWithNewlyCreatedAccount(dataset.email, dataset.password)
    await HomePage.deleteAccount()
});