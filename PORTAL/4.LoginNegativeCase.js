Feature("LoginNegativeCase");
const faker = require("faker");

Scenario("Login username tidak sesuai", ({ I }) => {
  // proses login username invalid
  I.amOnPage(process.env.url); // using url from env
  I.click("//a[.='Log in']");
  I.wait(3);
  const datausername = faker.phone.phoneNumber("#######"); // faker number
  I.fillField("//input[@id='loginusername']", "asopian" + datausername); // using faker random username
  I.fillField("//input[@id='loginpassword']", process.env.password); // using env password
  I.click("//button[.='Log in']");
  I.wait(3);
  I.grabPopupText("User does not exist.");
  I.seeInPopup("User does not exist.");
  I.saveScreenshot("Login_username_tidak sesuai.png")
  I.amAcceptingPopups("OK")
}).tag("Login").tag("Negative");

Scenario("Login password tidak sesuai", ({ I }) => {
  // proses login password invalid
  I.amOnPage(process.env.url); // using url from env
  I.click("//a[.='Log in']");
  I.wait(3);
  I.fillField("//input[@id='loginusername']", process.env.uname); // using env username
  const wrpas = faker.random.alphaNumeric(10); // faker random alfanumeric
  I.fillField("//input[@id='loginpassword']", wrpas); // using faker random password
  I.click("//button[.='Log in']");
  I.wait(3);
  I.grabPopupText("Wrong password.");
  I.seeInPopup("Wrong password.");
  I.saveScreenshot("Login_password_tidak_sesuai.png");
  I.amAcceptingPopups("OK");
}).tag("Login").tag("Negative");

Scenario("Login password kosong", ({ I }) => {
  // login password kosong
  I.amOnPage(process.env.url); // using url from env
  I.click("//a[.='Log in']");
  I.wait(3);
  I.fillField("//input[@id='loginusername']", process.env.uname); // using env username
  I.fillField("//input[@id='loginpassword']", "");
  I.click("//button[.='Log in']");
  I.wait(3);
  I.grabPopupText("Please fill out Username and Password.");
  I.seeInPopup("Please fill out Username and Password.");
  I.saveScreenshot("Login_password_kosong.png");
  I.amAcceptingPopups("OK");
}).tag("Login").tag("Negative");

Scenario("Login username kosong", ({ I }) => {
  // login username kosong
  I.amOnPage(process.env.url); // using url from env
  I.click("//a[.='Log in']");
  I.wait(3);
  I.fillField("//input[@id='loginusername']", "");
  I.fillField("//input[@id='loginpassword']", process.env.password); // using env password
  I.click("//button[.='Log in']");
  I.wait(3);
  I.grabPopupText("Please fill out Username and Password.");
  I.seeInPopup("Please fill out Username and Password.");
  I.saveScreenshot("Login_username_kosong.png");
  I.amAcceptingPopups("OK");
}).tag("Login").tag("Negative");