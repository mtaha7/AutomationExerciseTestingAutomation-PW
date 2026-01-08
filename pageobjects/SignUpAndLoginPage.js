const { expect } = require('@playwright/test')

class SignUpAndLoginPage {

    constructor(page) {
        this.page = page
        this.signUpNameFld = page.locator("input[data-qa='signup-name']")
        this.signUpEmailFld = page.locator("input[data-qa='signup-email']")
        this.loginEmailFld = page.locator("input[data-qa='login-email']")
        this.loginPasswordFld = page.locator("input[data-qa='login-password']")
        this.signUpBtn = page.locator('button', { hasText: 'Signup' })
        this.loginBtn = page.locator('button', { hasText: 'Login' })
        this.maleRadioBtn = page.locator('#id_gender1')
        this.signUpPasswordFld = page.locator('#password')
        this.daysDropDownMenu = page.locator('#days')
        this.monthsDropDownMenu = page.locator('#months')
        this.yearsDropDownMenu = page.locator('#years')
        this.firstNameFld = page.locator('#first_name')
        this.lastNameFld = page.locator('#last_name')
        this.companyFld = page.locator('#company')
        this.addressFld = page.locator('#address1')
        this.countryDropDownMenu = page.locator('#country')
        this.stateFld = page.locator('#state')
        this.cityFld = page.locator('#city')
        this.zipCodeFld = page.locator('#zipcode')
        this.mobileNumberFld = page.locator('#mobile_number')
        this.createAcountBtn = page.locator('button', { hasText: 'Create Account' })
        this.AccountCreatedMsg = page.locator("h2[data-qa='account-created']")
        this.continueBtn = page.locator("a[data-qa='continue-button']")
    }

    async signUpForNewAcount(name, email) {
        console.log("Setting Name To : " + name)
        await this.signUpNameFld.fill(name)
        console.log("Setting Email Address to : " + email)
        await this.signUpEmailFld.fill(email)
        console.log("Clicking on Sign Up Button")
        await this.signUpBtn.click()
    }

    async registeringNewAcountInformation(password,year, month, day, firtName, lastName, company, address, country, state, city, zipCode, mobileNumber) {
        console.log("Clicking on Male Radio Button")
        await this.maleRadioBtn.click()
        console.log("Setting Password To : " + password)
        await this.signUpPasswordFld.fill(password)
        console.log("Setting Date of Birth To : " + day + "/" + month + "/" + year)
        await this.daysDropDownMenu.selectOption(day)
        await this.monthsDropDownMenu.selectOption(month)
        await this.yearsDropDownMenu.selectOption(year)
        console.log("Setting First Name To : " + firtName)
        await this.firstNameFld.fill(firtName)
        console.log("Setting Last Name To : " + lastName)
        await this.lastNameFld.fill(lastName)
        console.log("Setting Company To : " + company)
        await this.companyFld.fill(company)
        console.log("Setting Address To : " + address)
        await this.addressFld.fill(address)
        console.log("Setting Country To : " + country)
        await this.countryDropDownMenu.selectOption(country)
        console.log("Setting State To : " + state)
        await this.stateFld.fill(state)
        console.log("Setting City To : " + city)
        await this.cityFld.fill(city)
        console.log("Setting ZipCode To : " + zipCode)
        await this.zipCodeFld.fill(zipCode)
        console.log("Setting Mobile Number to : " + mobileNumber)
        await this.mobileNumberFld.fill(mobileNumber)
        console.log("Clicking on Create Account Button")
        await this.createAcountBtn.click()
    }

    async validateSuccessfullSignUp() {
        await expect(this.AccountCreatedMsg).toBeVisible()
        console.log("Clicking on Continue Button")
        await this.continueBtn.click()
    }

    async loginWithNewlyCreatedAccount(email, password) {
        console.log("Login with Email : " + email)
        await this.loginEmailFld.type(email)
        console.log("Setting Password To : " + password)
        await this.loginPasswordFld.fill(password)
        console.log("Clicking on Login Button")
        await this.loginBtn.click()
    }

}

module.exports = {SignUpAndLoginPage}