package stepdefinition;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\AddCustomer.feature", tags = {"@sprint1"}, monochrome = true, strict = true, dryRun = false, glue = "stepdefinition", plugin = "html:target")

public class TestRunner {

}
