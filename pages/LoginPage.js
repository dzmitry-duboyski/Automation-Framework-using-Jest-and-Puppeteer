import BasePage from "./BasePage";
import constants from './constants/constants.js'
const baseURL = constants.baseURL

export default class LoginPage extends BasePage {

  async visit() {
    await page.goto(`${baseURL}login.html`)
  }

  async isLoginFormDisplayed() {
    await page.waitForSelector("#login_form")
    await page.waitForSelector("#user_login")
    await page.waitForSelector("#user_password")
    await page.waitForSelector("#form-actions-submit")
  }

  /**
   * User authorization on the site.
   * 
   * @param {string} login User `login` to login to the site.
   * @param {string} password User `password` to enter the site.
   * 
   * @example
   * ```js
   * await loginPage.login("username","password")
   * ```
   */
  async login(login, password) {
    await page.waitForSelector("#login_form")
    await page.type("#user_login", login, { delay: 100 })
    await page.type("#user_password", password, { delay: 100 } )
    await page.click("#form-actions-submit")
  }
}