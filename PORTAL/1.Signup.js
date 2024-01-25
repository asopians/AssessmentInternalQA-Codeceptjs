Feature("Signup");
const faker = require("faker");
const fs = require("fs");


Scenario("Signup-user", ({ I }) => {
  // Proses Signup User Normal
  I.amOnPage(process.env.url); //using env url
  I.click("//a[.='Sign up']");
  I.wait(3);
  I.waitForElement("//h5[@id='signInModalLabel']");
  const datausername = faker.phone.phoneNumber("#########"); //generate random numer for username
  I.fillField("//input[@id='sign-username']", "sopian" + datausername);  //generate random username
  const hasiluname = "sopian" + datausername; 
  I.fillField("//input[@id='sign-password']", process.env.password); //get pass from env
  I.click("//button[.='Sign up']");
  I.seeInPopup("Sign up successful.");
  I.grabPopupText("Sign up successful.");
  I.saveScreenshot("Signup_user.png");
  I.amAcceptingPopups("OK");

//Create Read dan Write username DataJson dengan Array 1
fs.readFile('./API/data/JsonData.json', 'utf8', (err, data) => {
  const parseData = JSON.parse(data);
  parseData[1] = hasiluname //get data from array 1
  console.log('Data read from file:', parseData);
  fs.writeFile('./API/data/JsonData.json', JSON.stringify(parseData),'utf8', (err) => {
  });

});
});