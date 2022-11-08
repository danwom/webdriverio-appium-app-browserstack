exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',

  updateJob: false,
  specs: [
    './examples/run-parallel-test/specs/single_test.js'
  ],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    project: "First Webdriverio iOS Project",
    build: 'Webdriverio iOS Parallel',
    name: 'parallel_test',
    app: "bs://a9ab60611cae615c8b42bad9123297afa17343e7",
    'browserstack.debug': true,
    'browserstack.appium_version': "1.21.0"
  },

  capabilities: [{
    device: "iPhone 11 Pro",
    os_version: "13"
  }, {
    device: "iPhone 12",
    os_version: "14"
  }, {
    device: "iPhone 13 ",
    os_version: "15"
  }],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 40000
  }
};

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
