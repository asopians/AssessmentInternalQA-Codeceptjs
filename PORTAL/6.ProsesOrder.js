Feature("ProsesOrder");
const faker = require("faker");

Scenario("Cekout-Product", ({ I }) => {
  // Proses Checkout Product and Payment
  I.amOnPage(process.env.url); // using env url
  I.click("//a[.='Log in']");
  I.wait(3)
  I.fillField("//input[@id='loginusername']", process.env.uname); // using env username
  I.fillField("//input[@id='loginpassword']", process.env.password); // using env password
  I.click("//button[.='Log in']");
  I.wait(5)
  I.see("Welcome " + process.env.uname); // check user
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
  const randname = faker.name.findName(); // generate random name
  I.fillField("//input[@id='name']", randname); 
  const randcournty = faker.address.country(); // generate random country
  I.fillField("//input[@id='country']", randcournty); 
  const randcity = faker.address.city(); // generate random city
  I.fillField("//input[@id='city']", randcity); 
  const rancc = faker.finance.creditCardNumber(); // generate random credit card number
  I.fillField("//input[@id='card']", rancc); 
  const randmont = faker.date.month(); // generate random month
  I.fillField("//input[@id='month']", randmont);
  const randyear = faker.phone.phoneNumber("203#"); // generate random 
  I.fillField("//input[@id='year']", randyear);
  I.saveScreenshot("Sukses_Fillfield_Payment.png");
  I.click("//button[.='Purchase']");
  I.wait(3);
  I.see("Thank you for your purchase!"); // check order
  I.see("Card Number: "+rancc); // check credit card number
  I.saveScreenshot("Suskes_ProsesOrder.png");
  I.click("//button[@class='confirm btn btn-lg btn-primary']");
  I.wait(3);
  I.dontSee("Thank you for your purchase!");
  I.saveScreenshot("Suskes_ProsesOrder2.png");
}).tag("ProsesOrder").tag("Positive");