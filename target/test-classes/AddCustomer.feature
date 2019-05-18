@feature1
Feature: Title of your feature
  I want to use this template for my feature file

@sprint1
  Scenario: Title of your scenario
    Given The user in on Homepage
    And The user clicks add customer button
    When The user fills all fields 
    |fname|Alex|
    |lname|Praba|
    |email|ap@gmail.com|
    |addr |salem|
    |phone|123345|
    And The user clicks submit button
    Then The user should see customer ID generated

