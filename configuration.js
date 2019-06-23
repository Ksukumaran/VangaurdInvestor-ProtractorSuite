var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    directConnect:true,
    specs: ['./specs/fundCompareValidation.js'],
    onPrepare: ()=>{
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
              savePath: 'target/screenshots'
            })
          );
        }
    
    // Can be used if execution should be in Firefox
    // capabilities: {
    //     'browserName': 'firefox'
    // }
  };