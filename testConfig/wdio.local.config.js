/*  This is an example of overriding parts of wdio.config
    Make your OWN COPY, in your own name, and in that copy override as much or as little as you need.
    Then, when invoking wdio, pass in this config file, like so:
       wdio common/config/local.wdio.config.js
*/

const debug = process.env.DEBUG;
const merge = require('deepmerge');
import SessionUtilities from '../utilities/sessionUtilities';
const wdioConf = require('../common/config/wdio.config');
const baseUrl='http://redhatlinux1.iscinternal.com:52773';
const host  = baseUrl.match("//(.*).iscinternal")[1];
const port = baseUrl.slice(-5);

// have main config file as default but overwrite environment specific information
exports.config = merge(wdioConf.config, {
    services: [ //if this is uncommented, don't need to run selenium-standalone start separately - except if running Edge.  Make sure @wdio/selenium-standalone-service installed
        ['selenium-standalone', {
            logPath: 'logs',
            installArgs: {
                drivers: {
                    chrome: {version: '83.0.4103.39'},
                    firefox: { version: '0.26.0' },
                    // edge: {version: '81.0.409.0'}, //doesn't install correct version and doesn't let you sub in correct driver renamed as grid does
                    ie: {
                        version: "3.141.5",
                        arch: "ia32", // forces use of 32 bit driver; not needed if you do this workaround for 64-bit:
                        // set: Internet Options → Advanced → Security → ☑ Enable 64-bit processes for Enhanced Protected Mode; restart PC
                        // arch: process.arch,
                        // arch: "x64",
                        baseURL: "https://selenium-release.storage.googleapis.com"
                    }
                }
            },
            args: {
                drivers: {
                    chrome: { version: '83.0.4103.39' },
                    firefox: { version: '0.26.0' },
                    // edge: {version: '81.0.409.0'}, //doesn't install correct version and doesn't let you sub in correct driver renamed as grid does
                    ie: {
                        version: "3.141.5",
                        arch: "ia32", // forces use of 32 bit driver; not needed if you do this workaround for 64-bit:
                        // set: Internet Options → Advanced → Security → ☑ Enable 64-bit processes for Enhanced Protected Mode; restart PC
                        // arch: process.arch,
                        // arch: "x64",
                        baseURL: "https://selenium-release.storage.googleapis.com"
                    }
                }
            },
        }]
    ],
    capabilities: [
        { browserName: 'firefox', marionette: true },
        {
             browserName: 'chrome',
             "goog:chromeOptions": {
                 prefs: {'credentials_enable_service': false, 'profile': {'password_manager_enabled': false}, 'w3c': true},
                 args: ['--start-maximized', '--disable-cache', '--disable-application-cache',
                     '--disable-offline-load-stale-cache', '--disk-cache-size=0',
                     '--v8-cache-options=off', '--disable-infobars']
             },
        },
        { browserName: 'internet explorer', "version" : '10',
        },
        { browserName: 'internet explorer', browserVersion : '11',
        },
    ],
    specs: [
            './features/**/*.feature',
        //Can also specify each feature file individually here and run all
        // './features/UserManagement.feature',
        // './features/Login.feature'
    ],
    //Specify suite to run as 'wdio common/config/wdio.local.config.js --suite users'
    suites: {
        login: [
            './features/Login.feature',
        ],
        users: [
            './features/UserManagement.feature',
        ]
    },
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //reporters: ['junit','spec','dot'],
    reporterOptions: {
        outputDir: 'testResults'
    },
    path: "/wd/hub",
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'error',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: 'http://redhatlinux1.iscinternal.com:52773',
    httpOptions : {
        host: host,
        path: '/api/cucumber/execute',
        //since we are listening on a custom port, we need to specify it by hand
        port: port,
        //This is what changes the request to a POST request
        method: 'POST'
    },
    cucumberOpts: {
        // scenarioLevelReporter: true,  //treat scenarios as tests instead of steps
        // retry: 1,
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> filetype:compiler used for processing required features
        compiler: [
            'js:@babel/register',
        ],
        // <boolean< Treat ambiguous definitions as errors
        failAmbiguousDefinitions: true,
        // <boolean> invoke formatters without executing steps
        // dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <boolean> Enable this config to treat undefined definitions as
        // warnings
        ignoreUndefinedDefinitions: false,
        // <string[]> ("extension:module") require files with the given
        // EXTENSION after requiring MODULE (repeatable)
        name: [],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <string[]> (name) specify the profile to use
        profile: [],
        // <string[]> (file/dir) require files before executing features
        require: [
            './features/step_definitions/*',
        ],
        // <string> specify a custom snippet syntax
        snippetSyntax: undefined,
        // <boolean> fail if there are any undefined or pending steps
        strict: true,
        // <string> (expression) only execute the features or scenarios with
        // tags matching the expression, see
        // https://docs.cucumber.io/tag-expressions/
        // tagExpression: '@Sanity or @Pending',
        // <boolean> add cucumber tags to feature or scenario name
        tagsInTitle: false,
        // <number> timeout for step definitions
        timeout: 2000000,
    },
    beforeScenario: function () {
        console.log("In beforeScenario");
        global.context.stackP=[];
    },
    afterScenario: function () {
        console.log("In afterScenario");
        SessionUtilities.logOutOrReload();
    }

}, { clone: false });

export default exports

// add an additional reporter
//exports.config.reporters.push('allure');

