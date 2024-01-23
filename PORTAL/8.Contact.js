Feature("Contact");
const faker = require("faker");

Scenario("Contact-Seller", ({ I }) => {
  I.amOnPage(process.env.url);
  I.click("//a[.='Contact']");
  I.wait(3);
  I.see("New message");
  const randEmail = faker.internet.email();
  I.fillField("//input[@id='recipient-email']", randEmail);
  const randname = faker.name.findName();
  I.fillField("//input[@id='recipient-name']", randname);
  const randmessage = faker.lorem.paragraph();
  I.fillField("//textarea[@id='message-text']", randmessage);
  I.saveScreenshot("contactfillfield.png");
  I.click("//button[.='Send message']");
  I.wait(3);
  I.seeInPopup("Thanks for the message!!");
  I.grabPopupText("Thanks for the message!!");
  I.saveScreenshot("Contact.png");
  I.amAcceptingPopups("OK");
  I.dontSee("New message");
}).tag("Contact").tag("Positive");