Feature: Check weather in different cities
  Scenario Outline: Check weather in cities from excel
    Given Zip code of city excel row "<row_index>" is found
    When Current weather for city zip code is obtained
    Then Current weather should be the same as in excel row "<row_index>" dataset
  Examples:
    |row_index|
    |2|
    |3|