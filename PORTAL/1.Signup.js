Feature("Signup");
const faker = require("faker");

Scenario("Signup-user", ({ I }) => {
  I.amOnPage(process.env.url);
  I.click("//a[.='Sign up']");
  I.wait(3);
  I.waitForElement("//h5[@id='signInModalLabel']");
  const datausername = faker.phone.phoneNumber("#########");
  let hasiluname = I.fillField("//input[@id='sign-username']", "sopian" + datausername);
  I.fillField("//input[@id='sign-password']", process.env.password);
  I.click("//button[.='Sign up']");
  I.seeInPopup("Sign up successful.");
  I.grabPopupText("Sign up successful.");
  I.saveScreenshot("Signup_user.png");
  I.amAcceptingPopups("OK");
}).tag("Signup").tag("Positive");