import {Selector} from 'testcafe';
import {selectors, staticText} from '../constants/google_search_constants';

class GooglePage {
    constructor() {
        this.searchField = Selector(selectors.GOOGLE_SEARCH_FIELD);
        this.searchButton = Selector(selectors.GOOGLE_SEARCH_BUTTON);
        this.testcafeLink = Selector(selectors.TESTCAFE_LINK);
        this.testcafeText = staticText.TEST_CAFE;
        this.testcafeUrl = staticText.TEST_CAFE_URL;
    }
}

export default new GooglePage();