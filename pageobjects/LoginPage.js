class LoginPage {

    constructor(page) {
        this.page = page
        this.usernameFld = page.locator('#Username')
        this.nextBtn = page.locator('#nxt')
        this.loginWithPasswordBtn = page.locator('button', { hasText: 'Login With Password' })
        this.passwordFld = page.locator('#Password')
        this.loginBtn = page.locator("form[action*='LoginWithPassword']").locator("button", { hasText: "Login" })
        this.otpMsg = page.locator('small', { hasText: 'Please enter the OTP' })
        this.otpFlds = page.locator("input[id*='otp']")
        this.sendBtn = page.locator("button[id='otpFormBtn']")
    }

    async appLogin(username, password, otp) {
        console.log("Login with Email : " + username)
        await this.usernameFld.type(username)
        await this.nextBtn.click()
        console.log("Setting Password to : " + password)
        await this.passwordFld.fill(password)
        await this.loginBtn.click()
        await this.wa
        await this.otpMsg.click()
        console.log("Setting OTP to : " + otp)
        for (let i = 0; i < await this.otpFlds.count(); ++i) {
            await this.otpFlds.nth(i).type(otp)
        }
    }
}

module.exports = { LoginPage }