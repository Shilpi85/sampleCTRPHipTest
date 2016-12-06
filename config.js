
exports.config = {
    getPageTimeout: 10000,

    onPrepare: function () {
        browser.manage().timeouts().setScriptTimeout(60000);
    },
 //   seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    capabilities: {
        browserName: 'firefox'
    },

    specs: [
        // Login Page
       // 'features/Organization/Create_Organization.feature '
        'Create_Organization.feature'
   ],


    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: ['step_definitions.js' ],
        format: 'pretty',
        format: 'json:results/output.json',
       // format: 'pretty',
        resultJsonOutputFile: 'true'

    }

};
