Feature("Signup");
const faker = require("faker");

Scenario("Sign-user", ({ I }) => {
  I.amOnPage(process.env.url);
  I.click("//a[.='Sign up']");
  I.waitForElement("//h5[@id='signInModalLabel']");
  const datausername = faker.phone.phoneNumber("#########");
  let hasiluname = I.fillField("//input[@id='sign-username']", "sopian" + datausername);
  I.fillField("//input[@id='sign-password']", process.env.password);
  I.click("//button[.='Sign up']");
  I.grabPopupText("Sign up successful.");
  I.seeInPopup("Sign up successful.");
  I.amAcceptingPopups("OK")
})