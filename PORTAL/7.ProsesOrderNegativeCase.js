Feature("ProsesOrder");
const faker = require("faker");

Scenario("Delete-Product", ({ I }) => {
  // Proses Delete Product
  I.amOnPage(process.env.url);
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
  I.wait(3);
  I.see("Samsung galaxy s6");
  I.saveScreenshot("BeforeDelete.png");
  I.click("//a[.='Delete']");
  I.dontSee("Samsung galaxy s6");
  I.saveScreenshot("AfterDelete.png");
}).tag("ProsesOrder").tag("Negative");


Scenario("Place-Order-Nama-Kosong", ({ I }) => {
  // Proses Place Order Nama Kosong
  I.amOnPage(process.env.url);
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
  I.wait(3)
  I.grabPopupText("Please fill out Name and Creditcard.");
  I.seeInPopup("Please fill out Name and Creditcard.");
  I.amAcceptingPopups("OK");
  I.saveScreenshot("Place_Order_Nama_Kosong.png");
});

Scenario("Place-Order-CreditCard-Kosong", ({ I }) => {
  // Proses Place Order CreditCard Kosong
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
  const randcournty = faker.address.country();  // generate random country
  I.fillField("//input[@id='country']", randcournty);
  const randcity = faker.address.city(); // generate random city
  I.fillField("//input[@id='city']", randcity);
  const randmont = faker.date.month(); // generate random month
  I.fillField("//input[@id='month']", randmont);
  const randyear = faker.phone.phoneNumber("203#"); // generate random
  I.fillField("//input[@id='year']", randyear);
  I.saveScreenshot("Sukses_Fillfield_Payment.png");
  I.click("//button[.='Purchase']");
  I.wait(3)
  I.grabPopupText("Please fill out Name and Creditcard.");
  I.seeInPopup("Please fill out Name and Creditcard.");
  I.amAcceptingPopups("OK");
  I.saveScreenshot("Place_Order_CreditCard_Kosong.png");
});

Scenario("Place-Order-Semua-Kolom-Dikosongkan", ({ I }) => {
  // Proses Place Order CreditCard Kosong
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
  I.click("//button[.='Purchase']");
  I.wait(3)
  I.grabPopupText("Please fill out Name and Creditcard.");
  I.seeInPopup("Please fill out Name and Creditcard.");
  I.amAcceptingPopups("OK");
  I.saveScreenshot("Place_Order_Semua_Kolom_Dikosongkan.png");
});