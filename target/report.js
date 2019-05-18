$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/AddCustomer.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@feature1"
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@feature1"
    },
    {
      "name": "@sprint1"
    }
  ]
});
formatter.step({
  "name": "The user in on Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_in_on_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_add_customer_button()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat stepdefinition.AddCustomerSteps.the_user_clicks_add_customer_button(AddCustomerSteps.java:23)\r\n\tat ✽.The user clicks add customer button(src/test/resources/AddCustomer.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user fills all fields",
  "rows": [
    {
      "cells": [
        "fname",
        "Alex"
      ]
    },
    {
      "cells": [
        "lname",
        "Praba"
      ]
    },
    {
      "cells": [
        "email",
        "ap@gmail.com"
      ]
    },
    {
      "cells": [
        "addr",
        "salem"
      ]
    },
    {
      "cells": [
        "phone",
        "123345"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_fills_all_fields()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user clicks submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user should see customer ID generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_should_see_customer_ID_generated()"
});
formatter.result({
  "status": "skipped"
});
});