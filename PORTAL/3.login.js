Feature("login");
const fs = require("fs");

Scenario("Login-user-using-env", async ({ I }) => {
  // Proses Login User Using .env
  I.amOnPage(process.env.url); // using url from env
  I.click("//a[.='Log in']");
  I.wait(3)
  I.fillField("//input[@id='loginusername']", process.env.uname);
  I.fillField("//input[@id='loginpassword']", process.env.password);
  I.click("//button[.='Log in']");
  I.wait(3);
  I. see("Welcome " +process.env.uname); // check username
  I.saveScreenshot("Login_user_using_env.jpg");
  I.wait(3);
  I.click("//a[.='Log out']");
  I.wait(3);
  I.dontSee("Welcome " +process.env.uname); // check user
}).tag("Login").tag("Positive"); 

Scenario("Login-user-using-datajson", async ({ I }) => {
// get username datajson from array 1
const rawData = fs.readFileSync('./API/data/JsonData.json', 'utf8');
const parseData = JSON.parse(rawData);
const usernamenya = parseData[1];
// Proses login user using data json
  I.amOnPage(process.env.url); // using url from env
  I.click("//a[.='Log in']");
  I.wait(3)
  I.fillField("//input[@id='loginusername']", usernamenya); // get username from data json
  I.fillField("//input[@id='loginpassword']", process.env.password); // using env password
  I.click("//button[.='Log in']");
  I.wait(3);
  I.see("Welcome " +usernamenya); // check user
  I.saveScreenshot("Login_user_using_datajson.png");
}).tag("Login").tag("Positive");

