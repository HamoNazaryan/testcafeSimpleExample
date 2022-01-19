import {ClientFunction} from 'testcafe';

module.exports = {
    anyString: "string",
    getLocation: ClientFunction(() => {
        return document.location.href;
    })
}
