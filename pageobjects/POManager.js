const {LoginPage} = require('../pageobjects/LoginPage')
const {HomePage} = require('../pageobjects/HomePage')


class POManager {

    constructor (page) {

        this.page = page
        this.LoginPage = new LoginPage(this.page)
        this.HomePage = new HomePage(this.page)

    }

    getLoginPage () {
        return this.LoginPage
    }

    getHomePage () {
        return this.HomePage
    }
}

module.exports = {POManager}