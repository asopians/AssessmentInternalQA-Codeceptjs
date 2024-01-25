Feature("Contact");
const faker = require("faker");

Scenario("Contact-Close", ({ I }) => {
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
  I.saveScreenshot("contactfillfieldclose.png");
  I.click("//div[@id='exampleModal']//button[@class='btn btn-secondary']"); // close contact
  I.wait(3);
  I.dontSee("New message");
  I.saveScreenshot("ContactNegativeCase.png");
}).tag("Contact").tag("Negative");