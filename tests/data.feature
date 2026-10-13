Feature: Data Entry Form

  Scenario: Fill out and submit the data entry form
    Given I open the data entry form page
    When I enter name "Nithin"
    And I enter email "nithin@test.com"
    And I enter phone "9876543210"
    And I enter address "Kochi, Kerala"
    And I select gender "Male"
    And I select days "Monday, Wednesday, Friday"
    And I choose country "United States"
    And I select colors "Blue, Red"
    And I select sorted list item "Cheetah"
    And I enter date picker 1 "08/14/2026"
    And I enter date picker 2 "14/08/2026"
    And I select date range from "10-08-2026" to "20-08-2026"
    And I click submit
    Then I verify the form submission is successful
