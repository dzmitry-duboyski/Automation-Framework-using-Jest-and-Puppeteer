
// continue 51 lesson
// start create clone for http://zero.webappsecurity.com/index.html

// old http://zero.webappsecurity.com/index.html
// new https://clone-zero-bank.netlify.app/index.html

import HomePage from "../pages/HomePage"
import TopBar from "../pages/components/TopBar"
import LoginPage from "../pages/LoginPage"

describe("example", () => {
  let homepage
  let topbar
  let loginPage = new LoginPage()

  beforeAll(async () => {
    jest.setTimeout(() => {
    }, 15000);

    homepage = new HomePage()
    topbar = new TopBar()
  })

  it("Homepage should work", async () => {
    await homepage.visit()
    // await page.waitForTimeout(5000)
  })

  it("Navbar should be displayed", async () => {
    await homepage.isNavbarDisplayed()
    await topbar.isTopBarDisplayed()
  })

  it("Try to login", async () => {
    await loginPage.visit()
    await loginPage.isLoginFormDisplayed()
    await loginPage.login('username', 'password')
    await loginPage.wait(5000)
  }, 15000)

})