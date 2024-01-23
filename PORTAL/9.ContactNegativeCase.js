Feature("Contact");
const faker = require("faker");

Scenario("Contact-Close", ({ I }) => {
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
  I.saveScreenshot("contactfillfieldclose.png");
  I.click("//button[.='Send message']"); // close contact
  I.wait(3);
  I.dontSee("New message");
  I.saveScreenshot("ContactNegativeCase.png");
}).tag("Contact").tag("Negative");