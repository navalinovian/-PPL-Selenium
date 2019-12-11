const { Builder, By, Key, util } = require("selenium-webdriver");
const assert = require("assert");


async function googling() {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login");
    await driver.findElement(By.id("txtUsername")).sendKeys("opensourcecms");
    await driver.findElement(By.id("txtPassword")).sendKeys("opensourcecms");
    await driver.findElement(By.id("btnLogin")).click();
    await driver.findElement(By.xpath('//*[@id="option-menu"]/li[1]'))
    .getText()
    .then(textValue => {
      try {
        assert.equal(textValue, 'Welcome Admin', "[FAIL]");  
        console.log("[PASS]");
      } catch (error) {
        console.log("Status : [FAIL]");
        console.log("Code :", error.code);
        console.log("Actual :", error.actual);
        console.log("Expected:", error.expected);
      }
    });
    
}

googling();
