const { expect } = require('@playwright/test')

class HomePage {

    constructor(page) {

        this.page = page
        this.signUpAndLoginBtn = page.locator("a[href*='login']")
        this.logOutBtn = page.locator("a[href*='logout']")
        this.deleteAccountBtn = page.locator("a[href*='delete_account']")
        this.AccountDeletedMsg = page.locator("h2[data-qa='account-deleted']")
    }

    async navigateToSignUpAndLoginPage() {
        console.log("Clicking on Sign Up And Login Button")
        await this.signUpAndLoginBtn.click()
    }

    async accountLogout() {
        console.log("Clicking on Log out Button")
        await this.logOutBtn.click()
    }

    async deleteAccount() {
        console.log("Clicking on Delete Account Button")
        await this.deleteAccountBtn.click()
        await expect(this.AccountDeletedMsg).toBeVisible()
    }

}

module.exports = {HomePage}