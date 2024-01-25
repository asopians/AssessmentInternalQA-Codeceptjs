Feature("Signup");
const faker = require("faker");
const fs = require("fs");


Scenario("Signup-user", ({ I }) => {
  I.amOnPage(process.env.url);
  I.click("//a[.='Sign up']");
  I.wait(3);
  I.waitForElement("//h5[@id='signInModalLabel']");
  const datausername = faker.phone.phoneNumber("#########");
  I.fillField("//input[@id='sign-username']", "sopian" + datausername);
  const hasiluname = "sopian" + datausername;
  I.fillField("//input[@id='sign-password']", process.env.password);
  I.click("//button[.='Sign up']");
  I.seeInPopup("Sign up successful.");
  I.grabPopupText("Sign up successful.");
  I.saveScreenshot("Signup_user.png");
  I.amAcceptingPopups("OK");


fs.readFile('./API/data/JsonData.json', 'utf8', (err, data) => {
  const parseData = JSON.parse(data);
  parseData[1] = hasiluname
  console.log('Data read from file:', parseData);
  fs.writeFile('./API/data/JsonData.json', JSON.stringify(parseData),'utf8', (err) => {
  });

});
});