Feature("ProsesOrder");
const faker = require("faker");

Scenario("Delete-Product", ({ I }) => {
  I.amOnPage(process.env.url);
  I.click("//a[.='Log in']");
  I.wait(3)
  I.fillField("//input[@id='loginusername']", process.env.uname);
  I.fillField("//input[@id='loginpassword']", process.env.password);
  I.click("//button[.='Log in']");
  I.wait(5)
  I.see("Welcome " + process.env.uname);
  I.click("//a[.='Samsung galaxy s6']");
  I.wait(3)
  I.see("Samsung galaxy s6");
  I.click("//a[@class='btn btn-success btn-lg']");
  I.wait(3)
  I.grabPopupText("Product added.");
  I.seeInPopup("Product added.");
  I.amAcceptingPopups("OK");
  I.click("//a[@id='cartur']");
  I.wait(3);
  I.see("Samsung galaxy s6");
  I.saveScreenshot("BeforeDelete.png");
  I.click("//a[.='Delete']");
  I.dontSee("Samsung galaxy s6");
  I.saveScreenshot("AfterDelete.png");
}).tag("ProsesOrder").tag("Negative");