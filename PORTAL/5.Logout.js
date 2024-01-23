Feature("Logout");

Scenario("Logout-user", ({ I }) => {
  I.amOnPage(process.env.url);
  I.click("//a[.='Log in']");
  I.wait(3)
  I.fillField("//input[@id='loginusername']", process.env.uname);
  I.fillField("//input[@id='loginpassword']", process.env.password);
  I.click("//button[.='Log in']");
  I.wait(3);
  I.see("Welcome " + process.env.uname);
  I.click("//a[.='Log out']");
  I.dontSee("Welcome " + process.env.uname);
  I.saveScreenshot("Logout_user.png");
}).tag("Logout").tag("Positive");