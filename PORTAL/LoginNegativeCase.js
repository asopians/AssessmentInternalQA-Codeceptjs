Feature("LoginNegativeCase");
const faker = require("faker");

Scenario("Login username tidak sesuai", ({ I }) => {
  I.amOnPage(process.env.url);
  I.click("//a[.='Log in']");
  const datausername = faker.phone.phoneNumber("#######");
  I.fillField("//input[@id='loginusername']", "asopian" + datausername);
  I.fillField("//input[@id='loginpassword']", process.env.password);
  I.click("//button[.='Log in']");
  I.wait(3);
  I.grabPopupText("User does not exist.");
  I.saveScreenshot("Login_username_tidak sesuai1.png")
  I.wait(10);
  I.seeInPopup("User does not exist.");
  I.saveScreenshot("Login_username_tidak sesuai2.png")
  I.wait(10);
  I.amAcceptingPopups("OK")
})

Scenario("Login password tidak sesuai", ({ I }) => {
  I.amOnPage(process.env.url);
  I.click("//a[.='Log in']");
  I.fillField("//input[@id='loginusername']", process.env.uname);
  const wrpas = faker.random.alphaNumeric(10);
  I.fillField("//input[@id='loginpassword']", wrpas);
  I.click("//button[.='Log in']");
  I.wait(3);
  I.grabPopupText("Wrong password.");
  I.seeInPopup("Wrong password.");
  I.amAcceptingPopups("OK")
})

Scenario("Login password kosong", ({ I }) => {
  I.amOnPage(process.env.url);
  I.click("//a[.='Log in']");
  I.fillField("//input[@id='loginusername']", process.env.uname);
  I.fillField("//input[@id='loginpassword']", "");
  I.click("//button[.='Log in']");
  I.wait(3);
  I.grabPopupText("Please fill out Username and Password.");
  I.seeInPopup("Please fill out Username and Password.");
  I.amAcceptingPopups("OK")
})

Scenario("Login username kosong", ({ I }) => {
  I.amOnPage(process.env.url);
  I.click("//a[.='Log in']");
  I.fillField("//input[@id='loginusername']", "");
  I.fillField("//input[@id='loginpassword']", process.env.password);
  I.click("//button[.='Log in']");
  I.wait(3);
  I.grabPopupText("Please fill out Username and Password.");
  I.seeInPopup("Please fill out Username and Password.");
  I.amAcceptingPopups("OK")
})