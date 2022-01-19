import {Selector} from 'testcafe';
import {selectors} from '../constants/testcafe_constants';

class TestcafePage {
    constructor() {
        this.testcafeLogo = Selector(selectors.TEST_CAFE_LOGO);
    }
}

export default new TestcafePage();