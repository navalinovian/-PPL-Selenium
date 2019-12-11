const { Builder, By, Key, util } = require("selenium-webdriver");
const assert = require("assert");

async function googling() {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://demo.1crmcloud.com/login.php");
  await driver.findElement(By.id("login_user")).sendKeys("admin");
  await driver.findElement(By.id("login_pass")).sendKeys("admin");
  await driver.findElement(By.id("login_button")).click();

  setTimeout(function() {
    //do what you need here
    driver.findElement(By.className("default-avatar")).click();
  }, 8000);

   setTimeout(async function() {
    //do what you need here
    const str = await driver
    .findElement(By.xpath('//*[@id="_form_subheader"]/h4'))
    .getText();
    
    
    let actual = str.split("—");
    // console.log(actual);
    
    let expected = " admin";
    
        try {
          assert.equal(actual[actual.length-1], expected, "[FAIL]");
          console.log("[PASS]");
        } catch (error) {
          console.log("Status : [FAIL]");
          console.log("Code :", error.code);
          console.log("Actual :", error.actual);
          console.log("Expected:", error.expected);
        }
  }, 10000);

}

function setSelectedValue(selectObj, valueToSet) {
  for (var i = 0; i < selectObj.options.length; i++) {
    if (selectObj.options[i].text == valueToSet) {
      selectObj.options[i].selected = true;
      return;
    }
  }
}

googling();
