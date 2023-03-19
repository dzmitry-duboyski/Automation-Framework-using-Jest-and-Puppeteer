
// continue 51 lesson
// start create clone for http://zero.webappsecurity.com/index.html

// old http://zero.webappsecurity.com/index.html
// new https://clone-zero-bank.netlify.app/index.html

import HomePage from "../pages/HomePage"

describe('example', () => {
  let homepage

  beforeAll(async () => {
    jest.setTimeout(() => {
      
    }, 15000);
    homepage = new HomePage()
  })

  it('Homepage shoult work', async () => {
    await homepage.visit()
    // await page.waitForTimeout(5000)
  })

  it('Navbar shoult be displayed', async () => {
    await homepage.isNavbarDisplayed()
  })

})