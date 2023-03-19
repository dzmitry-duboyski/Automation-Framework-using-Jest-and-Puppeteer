
// continue 51 lesson
// start create clone for http://zero.webappsecurity.com/index.html

// old http://zero.webappsecurity.com/index.html
// new https://clone-zero-bank.netlify.app/index.html

import HomePage from "../../pages/HomePage"
import TopBar from "../../pages/components/TopBar"
import LoginPage from "../../pages/LoginPage"
import FeedbackPage from "../../pages/FeedBackPage"

describe("End-To-End Test", () => {
  const homePage = new HomePage()
  const topbar = new TopBar()
  const loginPage = new LoginPage()
  const feedbackPage = new FeedbackPage()
  const defaultTimeout = 15000

  it("Should load homepage", async () => {
    await homePage.visit()
    await homePage.isNavbarDisplayed()
  }, defaultTimeout)

  it("Should submit feedback", async () => {
    await homePage.clickFeedbackLink()
    await feedbackPage.isFeedbackFormDisplayed()
    await feedbackPage.submitFeedback(
      "Jon",
      "jon.dilly@mail.com",
      "subject",
      "Lorem ipsum"
    )
  }, defaultTimeout)
})