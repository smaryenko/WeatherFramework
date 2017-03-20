$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/WeatherFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Check weather in different cities",
  "description": "",
  "id": "check-weather-in-different-cities",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Check weather in cities from excel",
  "description": "",
  "id": "check-weather-in-different-cities;check-weather-in-cities-from-excel",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Zip code of city excel row \"\u003crow_index\u003e\" is found",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Current weather for city zip code is obtained",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Current weather should be the same as in excel row \"\u003crow_index\u003e\" dataset",
  "keyword": "Then "
});
formatter.examples({
  "line": 6,
  "name": "",
  "description": "",
  "id": "check-weather-in-different-cities;check-weather-in-cities-from-excel;",
  "rows": [
    {
      "cells": [
        "row_index"
      ],
      "line": 7,
      "id": "check-weather-in-different-cities;check-weather-in-cities-from-excel;;1"
    },
    {
      "cells": [
        "2"
      ],
      "line": 8,
      "id": "check-weather-in-different-cities;check-weather-in-cities-from-excel;;2"
    },
    {
      "cells": [
        "3"
      ],
      "line": 9,
      "id": "check-weather-in-different-cities;check-weather-in-cities-from-excel;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5263897100,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Check weather in cities from excel",
  "description": "",
  "id": "check-weather-in-different-cities;check-weather-in-cities-from-excel;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Zip code of city excel row \"2\" is found",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Current weather for city zip code is obtained",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Current weather should be the same as in excel row \"2\" dataset",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 28
    }
  ],
  "location": "WeatherFeature.getCityZipCode(String)"
});
formatter.result({
  "duration": 5684283400,
  "status": "passed"
});
formatter.match({
  "location": "WeatherFeature.getCityWeather()"
});
formatter.result({
  "duration": 5918856999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 52
    }
  ],
  "location": "WeatherFeature.checkCityWeather(String)"
});
formatter.result({
  "duration": 2155500,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[3.6] °C\u003e but was:\u003c[1.9] °C\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat step_definitions.WeatherFeature.checkCityWeather(WeatherFeature.java:59)\r\n\tat ✽.Then Current weather should be the same as in excel row \"2\" dataset(features/WeatherFeature.feature:5)\r\n",
  "status": "failed"
});
formatter.write("Current Page URL is https://www.wunderground.com/cgi-bin/findweather/getForecast?query\u003d10001");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 10015233501,
  "status": "passed"
});
formatter.before({
  "duration": 4274772400,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Check weather in cities from excel",
  "description": "",
  "id": "check-weather-in-different-cities;check-weather-in-cities-from-excel;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Zip code of city excel row \"3\" is found",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Current weather for city zip code is obtained",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Current weather should be the same as in excel row \"3\" dataset",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 28
    }
  ],
  "location": "WeatherFeature.getCityZipCode(String)"
});
formatter.result({
  "duration": 3254778500,
  "status": "passed"
});
formatter.match({
  "location": "WeatherFeature.getCityWeather()"
});
formatter.result({
  "duration": 4544469300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 52
    }
  ],
  "location": "WeatherFeature.checkCityWeather(String)"
});
formatter.result({
  "duration": 207700,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[19.2] °C\u003e but was:\u003c[21.0] °C\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat step_definitions.WeatherFeature.checkCityWeather(WeatherFeature.java:59)\r\n\tat ✽.Then Current weather should be the same as in excel row \"3\" dataset(features/WeatherFeature.feature:5)\r\n",
  "status": "failed"
});
formatter.write("Current Page URL is https://www.wunderground.com/cgi-bin/findweather/getForecast?query\u003d73008");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 2389592000,
  "status": "passed"
});
});