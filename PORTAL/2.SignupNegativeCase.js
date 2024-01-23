Feature("SignupNegativeCase");
const faker = require("faker");

Scenario("Sign Username Kosong", ({ I }) => {
  I.amOnPage(process.env.url);
  I.click("//a[.='Sign up']");
  I.wait(3);
  I.waitForElement("//h5[@id='signInModalLabel']");
  I.fillField("//input[@id='sign-username']", "");
  I.fillField("//input[@id='sign-password']", process.env.password);
  I.click("//button[.='Sign up']");
  I.grabPopupText("Please fill out Username and Password.");
  I.seeInPopup("Please fill out Username and Password.");
  I.saveScreenshot("Sign_Username_Kosong.png");
  I.amAcceptingPopups("OK");
})

Scenario("Sign Password Kosong", ({ I }) => {
  I.amOnPage(process.env.url);
  I.click("//a[.='Sign up']");
  I.wait(3);
  I.waitForElement("//h5[@id='signInModalLabel']");
  const randUname = faker.random.alphaNumeric(10);
  I.fillField("//input[@id='sign-username']", "sopian" + randUname);
  I.fillField("//input[@id='sign-password']", "");
  I.click("//button[.='Sign up']");
  I.grabPopupText("Please fill out Username and Password.");
  I.seeInPopup("Please fill out Username and Password.");
  I.saveScreenshot("Sign_Password_Kosong.png");
  I.amAcceptingPopups("OK");
}).tag("Negative");