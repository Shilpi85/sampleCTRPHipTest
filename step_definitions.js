module.exports = function () {
    this.Before(function (scenario) {
        this.actionwords = Object.create(require('./actionwords.js').Actionwords);
    });

    this.After(function (scenario) {
        this.actionwords = null;
    });


    this.Given(/^Login in to CTRP app "(.*)" "(.*)" "(.*)"$/, function (url, username, password, callback) {
        this.actionwords.loginInToCTRPApp(url, username, password);
        browser.sleep(25).then(callback);
    });

    this.Given(/^Select page "(.*)"$/, function (page, callback) {
        this.actionwords.selectPage(page);
        browser.sleep(25).then(callback);
    });

    this.Given(/^PO Create Organization "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)"$/, function (name, alias, address1, address2, country, state, city, postal_code, email, phone, phone_ext, callback) {
        this.actionwords.pOCreateOrganization(name, alias, address1, address2, country, state, city, postal_code, email, phone, phone_ext);
        callback();
    });

    this.Given(/^Click button "(.*)"$/, function (button, callback) {
        this.actionwords.clickButton(button);
        callback();
    });

    this.Given(/^PO Search Organization "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)"$/, function (name, alias, family_name, source_context, source_id, source_status, city, postal_code, country, phone, email, state, processing_status, updated_by, service_request, last_updated_start_date, last_updated_end_date, exact_search, callback) {
        this.actionwords.pOSearchOrganization(name, alias, family_name, source_context, source_id, source_status, city, postal_code, country, phone, email, state, processing_status, updated_by, service_request, last_updated_start_date, last_updated_end_date, exact_search);
        callback();
    });

    this.Given(/^Reg Search Organization "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)"$/, function (name, alias, family_name, source_id, city, postal_code, country, phone, email, state, updated_by, exact_search, callback) {
        this.actionwords.regSearchOrganization(name, alias, family_name, source_id, city, postal_code, country, phone, email, state, updated_by, exact_search);
        callback();
    });
}
