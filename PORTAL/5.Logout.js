Feature("Logout");

Scenario("Logout-user", ({ I }) => {
  I.amOnPage(process.env.url); // using env url
  I.click("//a[.='Log in']");
  I.wait(3)
  I.fillField("//input[@id='loginusername']", process.env.uname); // using env username 
  I.fillField("//input[@id='loginpassword']", process.env.password); // using env password
  I.click("//button[.='Log in']");
  I.wait(3);
  I.see("Welcome " + process.env.uname); // check user
  I.saveScreenshot("Before_logout_user.png");
  I.click("//a[.='Log out']");
  I.dontSee("Welcome " + process.env.uname); // check dont see user
  I.saveScreenshot("After_Logout_user.png");
}).tag("Logout").tag("Positive");