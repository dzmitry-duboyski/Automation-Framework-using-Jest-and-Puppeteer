import BasePage from "./BasePage";
import constants from "./constants/constants";
const baseURL = constants.baseURL

export default class FeedbackPage extends BasePage {
  async visit() {
    page.goto(`${baseURL}feedback.html`)
  }

  async isFeedbackFormDisplayed() {
    await page.waitForSelector("#name")
    await page.waitForSelector("#email")
    await page.waitForSelector("#subject")
    await page.waitForSelector("#comment")
    await page.waitForSelector("#submit-feedback")
  }


  /**
   * Sending a feedback form. The form will be filled with the received data and submitted.
   * @param {string} name `name` - username.
   * @param {string} email `email` - user's email.
   * @param {string} subject `subject` - email subject.
   * @param {string} comment `comment` - user comment.
   */
  async submitFeedback(name, email, subject, comment) {
    await page.type("#name",name )
    await page.type("#email", email)
    await page.type("#subject", subject)
    await page.type("#comment", comment)
    await page.click("#submit-feedback")
  }
}