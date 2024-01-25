Feature("SignupNegativeCase");
const faker = require("faker");

Scenario("Sign Username Kosong", ({ I }) => {
  // Proses Signup Username Kosong
  I.amOnPage(process.env.url); // using url from env
  I.click("//a[.='Sign up']");
  I.wait(3);
  I.waitForElement("//h5[@id='signInModalLabel']");
  I.fillField("//input[@id='sign-username']", "");
  I.fillField("//input[@id='sign-password']", process.env.password); // using env password
  I.click("//button[.='Sign up']");
  I.grabPopupText("Please fill out Username and Password.");
  I.seeInPopup("Please fill out Username and Password.");
  I.saveScreenshot("Sign_Username_Kosong.png");
  I.amAcceptingPopups("OK");
})

Scenario("Sign Password Kosong", ({ I }) => {
  // Proses Signup Password Kosong
  I.amOnPage(process.env.url); // using url from env
  I.click("//a[.='Sign up']");
  I.wait(3);
  I.waitForElement("//h5[@id='signInModalLabel']");
  const randUname = faker.random.alphaNumeric(10); // generate random alphanumberic
  I.fillField("//input[@id='sign-username']", "sopian" + randUname); // generate random username
  I.fillField("//input[@id='sign-password']", "");
  I.click("//button[.='Sign up']");
  I.grabPopupText("Please fill out Username and Password.");
  I.seeInPopup("Please fill out Username and Password.");
  I.saveScreenshot("Sign_Password_Kosong.png");
  I.amAcceptingPopups("OK");
}).tag("Negative");