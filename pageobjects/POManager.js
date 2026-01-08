const {SignUpAndLoginPage} = require('../pageobjects/SignUpAndLoginPage')
const {HomePage} = require('../pageobjects/HomePage')


class POManager {

    constructor (page) {

        this.page = page
        this.SignUpAndLoginPage = new SignUpAndLoginPage(this.page)
        this.HomePage = new HomePage(this.page)

    }

    getSignUpAndLoginPage () {
        return this.SignUpAndLoginPage
    }

    getHomePage () {
        return this.HomePage
    }
}

module.exports = {POManager}