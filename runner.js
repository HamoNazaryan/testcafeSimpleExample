// const createTestCafe = require('testcafe');

// // const testcafe = await createTestCafe('localhost', 1337, 1338);

// try {
//     const runner = testcafe.createRunner();

//     const failed = await runner.run({
//         src: (['tests/google_search_test.js']),
//         skipJsErrors: true,
//         quarantineMode: true,
//         selectorTimeout: 50000,
//         assertionTimeout: 7000,
//         pageLoadTimeout: 8000,
//         speed: 0.1,
//         stopOnFirstFail: true
//     });

//     console.log('Tests failed: ' + failed);
// }
// finally {
//     await testcafe.close();
// }


/* eslint-disable no-console */
const createTestCafe = require('testcafe');
/* eslint-disable-next-line import/no-unresolved, import/extensions */
const allureReporter = require('../src/reporter/allure-reporter');
/* eslint-disable-next-line import/no-unresolved, import/extensions */
const { reporterConfig } = require('../src/utils');

let testcafe = null;

createTestCafe()
  .then((tc) => {
    testcafe = tc;
    const runner = testcafe.createRunner();
    const browsers = process.env.TESTCAFE_BROWSER || 'chrome:headless';

    return runner
      .src(['tests/google_search_test.js'])
      .browsers(browsers)
      .reporter(allureReporter)
      .compilerOptions({ typescript: { configPath: 'tsconfig.test.json' } })
      .screenshots({
        path: reporterConfig.SCREENSHOT_DIR,
        takeOnFails: true,
      })
      .concurrency(reporterConfig.CONCURRENCY)
      .run({
        quarantineMode: reporterConfig.ENABLE_QUARANTINE,
        disableScreenshots: !reporterConfig.ENABLE_SCREENSHOTS,
      });
  })
  .then((failed) => {
    testcafe.close();

    if (failed > 0) {
      throw new Error(`TestCafé tests failed: ${failed}`);
    }
  })
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  .catch((error) => {
    testcafe.close();
    console.log(error);
    // throw error;
  });
