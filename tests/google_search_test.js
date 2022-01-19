import {t, Selector} from 'testcafe';
import google_page from '../pages/google_search_page';
import testcafe_page from '../pages/testcafe_page';
import {getLocation, anyString} from '../utils/helper'
// import step from 'testcafe-reporter-allure';
import {step} from 'testcafe-reporter-allure/dist/utils'

fixture`Getting Started`
    .beforeEach(async t => {await t
      .maximizeWindow()
    });

test
    .page("google.com")
    ("Search by ", async (t) => {
     
      await step('Step -1 Add text to form', t, 
       t.typeText(google_page.searchField, google_page.testcafeText)
        .expect("Step1").eql("Step1")
        );

      // eval(() => location.reload(true));
      await step('Step -2 Add text to form', t, 
        t.click(google_page.searchButton)
        );

      await step('Step -3 Add text to form', t, 
      t.click(google_page.testcafeLink)
      .expect("location").eql("error")
      );

          const location = await getLocation();

      await step('Step -4 Add text to form', t, 
      t.expect(testcafe_page.testcafeLogo.exists).ok()
      );        

   await step('Step - 5 Add text to form', t, 
          await t.expect("location").eql("error")          
   )
});

