Feature("login");
const fs = require("fs");

Scenario("Login-user-using-env", async ({ I }) => {
  I.amOnPage(process.env.url);
  I.click("//a[.='Log in']");
  I.wait(3)
  I.fillField("//input[@id='loginusername']", process.env.uname);
  I.fillField("//input[@id='loginpassword']", process.env.password);
  I.click("//button[.='Log in']");
  I.wait(3);
  I. see("Welcome " +process.env.uname);
  I.saveScreenshot("Login_user_using_env.jpg");
  I.wait(3);
  I.click("//a[.='Log out']");
  I.wait(3);
  I.dontSee("Welcome " +process.env.uname);
}).tag("Login").tag("Positive");

Scenario("Login-user-using-datajson", async ({ I }) => {
const rawData = fs.readFileSync('./API/data/JsonData.json', 'utf8');
const parseData = JSON.parse(rawData);
const usernamenya = parseData[1];
  I.amOnPage(process.env.url);
  I.click("//a[.='Log in']");
  I.wait(3)
  I.fillField("//input[@id='loginusername']", usernamenya);
  I.fillField("//input[@id='loginpassword']", process.env.password);
  I.click("//button[.='Log in']");
  I.wait(3);
  I.see("Welcome " +usernamenya);
  I.saveScreenshot("Login_user_using_datajson.png");
}).tag("Login").tag("Positive");

