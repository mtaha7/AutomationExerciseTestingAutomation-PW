const { expect } = require('@playwright/test')

class HomePage {

    constructor(page) {

        this.page = page
        this.welocomeMsg = page.locator('h1', { hasText: 'Welcome To Mumaris' })
        this.logOutBtn = page.locator('span', { hasText: 'Log Out' })
    }

    async validateSuccessfullLogin() {
        await expect(this.welocomeMsg).toBeVisible()
    }

    async appLogout() {
        await this.logOutBtn.click()
    }

}

module.exports = {HomePage}