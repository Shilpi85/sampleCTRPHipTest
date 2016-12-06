Feature: Create Organization


  Scenario: PO- Create Organization (uid:665d13c4-0cfe-458b-8d58-b9dfefbe9044)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Select page "Add Organization"
    And PO Create Organization "Henry Ford Health System" "Henry Ford" "2799 W. Grand Blvd." "Building 5" "United States" "Michigan" "Detroit" "48202" "henryford@hfs.com" "(313) 916-1666" "01"
