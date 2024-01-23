Feature("ProsesOrder");
const faker = require("faker");

Scenario("Cekout-Product", ({ I }) => {
  I.amOnPage(process.env.url);
  I.click("//a[.='Log in']");
  I.wait(3)
  I.fillField("//input[@id='loginusername']", process.env.uname);
  I.fillField("//input[@id='loginpassword']", process.env.password);
  I.click("//button[.='Log in']");
  I.wait(5)
  I.see("Welcome " + process.env.uname);
  I.click("//a[.='Samsung galaxy s6']");
  I.wait(3)
  I.see("Samsung galaxy s6");
  I.click("//a[@class='btn btn-success btn-lg']");
  I.wait(3)
  I.grabPopupText("Product added.");
  I.seeInPopup("Product added.");
  I.amAcceptingPopups("OK");
  I.click("//a[@id='cartur']");
  I.click("//button[normalize-space()='Place Order']");
  I.waitForText("Place order");
  const randname = faker.name.findName();
  I.fillField("//input[@id='name']", randname);
  const randcournty = faker.address.country();
  I.fillField("//input[@id='country']", randcournty);
  const randcity = faker.address.city();
  I.fillField("//input[@id='city']", randcity);
  const rancc = faker.finance.creditCardNumber();
  I.fillField("//input[@id='card']", rancc);
  const randmont = faker.date.month();
  I.fillField("//input[@id='month']", randmont);
  const randyear = faker.phone.phoneNumber("203#");
  I.fillField("//input[@id='year']", randyear);
  I.saveScreenshot("Sukses_Fillfield_Payment.png");
  I.click("//button[.='Purchase']");
  I.wait(3);
  I.see("Thank you for your purchase!");
  I.see("Card Number: "+rancc);
  I.saveScreenshot("Suskes_ProsesOrder.png");
  I.click("//button[@class='confirm btn btn-lg btn-primary']");
  I.wait(3);
  I.dontSee("Thank you for your purchase!");
  I.saveScreenshot("Suskes_ProsesOrder2.png");
}).tag("ProsesOrder").tag("Positive");