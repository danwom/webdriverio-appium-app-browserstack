userName = process.env.BROWSERSTACK_USERNAME
accessKey = process.env.BROWSERSTACK_ACCESS_KEY
browserstackLocal = process.env.BROWSERSTACK_LOCAL
buildName = process.env.BROWSERSTACK_BUILD_NAME;
browserstackLocalIdentifier = process.env.BROWSERSTACK_LOCAL_IDENTIFIER
app = process.env.BROWSERSTACK_APP_ID



exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',

  updateJob: false,
  specs: [
    './examples/run-first-test/specs/first_test.js'
  ],
  exclude: [],

  capabilities: [{
    app,
    build: buildName,
    project: "Jenkins Auto Test",
    name: 'first_test',
    device: 'iPhone 13',
    os_version: "15.5",
    'browserstack.debug': true,
    'browserstack.appium_version': "1.21.0",
    "browserstack.local" : browserstackLocal,
    "browserstack.localIdentifier" : browserstackLocalIdentifier
  }],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 15000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
};
