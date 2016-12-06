var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = require('chai').expect;

exports.Actionwords = {
    loginInToCTRPApp: function (url, username, password) {
        // TODO: Implement action: "Given URL of CTRP page is " + String(URL)
        // TODO: Implement action: "And I enter the Username as " + String(username)
        // TODO: Implement action: "And I enter the Password as " + String(password)
        // TODO: Implement result: "Then the User should be logged in"
       // throw 'Not implemented';
        browser.get(url);
        browser.driver.wait(function () {
            console.log('wait here');
            return true;
        }, 40).then(function () {
            element(by.model('userView.userObj.user.username')).sendKeys(username);
            element(by.model('userView.userObj.user.password')).sendKeys(password);
            element(by.css('button[ng-click="userView.authenticate()"]')).click();
            element(by.buttonText('Accept')).click();
            expect(element(by.binding('headerView.username')).getText()).to.eventually.equal(username);//.and.notify(callback);
        });
    },
    selectPage: function (page) {
        // TODO: Implement action: "And I want to " + String(page)
        // TODO: Implement result: "Then I should be in " + String(page)
       // throw 'Not implemented';
        expect(element(by.binding('headerView.username')).getText()).to.eventually.equal('ctrptrialsubmitter','Verifying the logged in user');
    },
    pOCreateOrganization: function (name, alias, address1, address2, country, state, city, postal_code, email, phone, phone_ext) {
        // TODO: Implement action: "And I enter the Organization Name " + String(name)
        // TODO: Implement action: "And I enter the Organization Alias " + String(alias)
        // TODO: Implement action: "And I enter the Organization Address1 " + String(address1)
        // TODO: Implement action: "And I enter the Organization Address2 " + String(address2)
        // TODO: Implement action: "And I select the Organization Country " + String(country)
        // TODO: Implement action: "And I enter the Organization State " + String(state)
        // TODO: Implement action: "And I enter the Organization City " + String(city)
        // TODO: Implement action: "And I enter the Organization Postal Code " + String(postalCode)
        // TODO: Implement action: "And I enter the Organization Email " + String(email)
        // TODO: Implement action: "And I enter the Organization Phone " + String(phone)
        // TODO: Implement action: "And I enter the Organization Phone Extension " + String(phoneExt)
        this.clickButton("save");
        // TODO: Implement result: "Then Organization should be created"
        throw 'Not implemented';
    },
    clickButton: function (button) {
        // TODO: Implement action: "And I click on " + String(button)
        throw 'Not implemented';
    },
    pOSearchOrganization: function (name, alias, family_name, source_context, source_id, source_status, city, postal_code, country, phone, email, state, processing_status, updated_by, service_request, last_updated_start_date, last_updated_end_date, exact_search) {
        // TODO: Implement action: "and I enter the Name " + String(name) + " for Organization search"
        // TODO: Implement action: "and I check the Alias " + String(alias) + " for Organization search"
        // TODO: Implement action: "and I enter the Family Name " + String(familyName) + " for Organization search"
        // TODO: Implement action: "and I select the Source Context " + String(sourceContext) + " for Organization search"
        // TODO: Implement action: "and I enter the Source ID " + String(sourceID) + " for Organization search"
        // TODO: Implement action: "and I select the Source Status " + String(sourceStatus) + " for Organization search"
        // TODO: Implement action: "and I enter the City " + String(city) + " for Organization search"
        // TODO: Implement action: "and I enter the Postal Code " + String(postalCode) + " for Organization search"
        // TODO: Implement action: "and I select the Country " + String(country) + " for Organization search"
        // TODO: Implement action: "and I enter the Phone " + String(phone) + " for Organization search"
        // TODO: Implement action: "and I enter the Email " + String(email) + " for Organization search"
        // TODO: Implement action: "and I select the State " + String(state) + " for Organization search"
        // TODO: Implement action: "and I select the processing Status " + String(processingStatus) + " for Organization search"
        // TODO: Implement action: "and I enter the Updated By " + String(updatedBy) + " for Organization search"
        // TODO: Implement action: "and I select the Service Request " + String(serviceRequest) + " for Organization search"
        // TODO: Implement action: "and I select the Last Updated Start Date " + String(lastUpdatedStartDate) + " for Organization search"
        // TODO: Implement action: "and I select the Last Updated End Date " + String(lastUpdatedEndDate) + " for Organization search"
        // TODO: Implement action: "and I check the Exact Search " + String(exactSearch) + " for Organization search"
        // And Click button "search"
        this.clickButton("search");
        // TODO: Implement result: "Then Result  should be displayed for Organization"
        throw 'Not implemented';
    },
    regSearchOrganization: function (name, alias, family_name, source_id, city, postal_code, country, phone, email, state, updated_by, exact_search) {
        // TODO: Implement action: "and I enter the Name " + String(name) + " for Organization search"
        // TODO: Implement action: "and I check the Alias " + String(alias) + " for Organization search"
        // TODO: Implement action: "and I enter the Family Name " + String(familyName) + " for Organization search"
        // TODO: Implement action: "and I enter the Source ID " + String(sourceID) + " for Organization search"
        // TODO: Implement action: "and I enter the City " + String(city) + " for Organization search"
        // TODO: Implement action: "and I enter the Postal Code " + String(postalCode) + " for Organization search"
        // TODO: Implement action: "and I select the Country " + String(country) + " for Organization search"
        // TODO: Implement action: "and I enter the Phone " + String(phone) + " for Organization search"
        // TODO: Implement action: "and I enter the Email " + String(email) + " for Organization search"
        // TODO: Implement action: "and I select the State " + String(state) + " for Organization search"
        // TODO: Implement action: "and I check the Exact Search " + String(exactSearch) + " for Organization search"
        // And Click button "search"
        this.clickButton("search");
        // TODO: Implement result: "Then Result  should be displayed for Organization"
        throw 'Not implemented';
    }
};