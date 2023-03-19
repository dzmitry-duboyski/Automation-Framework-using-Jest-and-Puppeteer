import BasePage from "./BasePage"


export default class HomePage extends BasePage{
  async visit() {
    await page.goto('http://zero.webappsecurity.com/')
    await page.waitForSelector('#nav')
  }
  
  async isNavbarDisplayed() {
    await page.waitForSelector('#pages-nav')
    await page.waitForSelector('#homeMenu')
    await page.waitForSelector('#onlineBankingMenu')
    await page.waitForSelector('#feedback')
  }
  
  async clickHomepageLink(){
    // await page.waitForSelector('#homeMenu')
    await page.click('#homeMenu')
  }

  async clickOnlineBankingMenuLink(){
    // await page.waitForSelector('#onlineBankingMenu')
    await page.click('#onlineBankingMenu')
  }

  async clickFeedbackLink(){
    // await page.waitForSelector('#feedback')
    await page.click('#feedback')
  }
}