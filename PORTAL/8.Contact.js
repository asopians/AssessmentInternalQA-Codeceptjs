Feature("Contact");
const faker = require("faker");

Scenario("Contact-Seller", ({ I }) => {
  // Proses Contact Seller
  I.amOnPage(process.env.url); // using env url
  I.click("//a[.='Contact']");
  I.wait(3);
  I.see("New message");
  const randEmail = faker.internet.email(); // generate random email
  I.fillField("//input[@id='recipient-email']", randEmail); 
  const randname = faker.name.findName(); // generate random name
  I.fillField("//input[@id='recipient-name']", randname);
  const randmessage = faker.lorem.paragraph(); // generate random message
  I.fillField("//textarea[@id='message-text']", randmessage);
  I.saveScreenshot("contactfillfield.png");
  I.click("//button[.='Send message']");
  I.wait(3);
  I.seeInPopup("Thanks for the message!!"); // check message
  I.grabPopupText("Thanks for the message!!");
  I.saveScreenshot("Contact.png");
  I.amAcceptingPopups("OK");
  I.dontSee("New message");
}).tag("Contact").tag("Positive");