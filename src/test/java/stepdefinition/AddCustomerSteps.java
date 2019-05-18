package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddCustomerSteps {
	static WebDriver driver;
	@Given("The user in on Homepage")
	public void the_user_in_on_Homepage() {
	    System.setProperty("webdriver.chrome.driver", "C:\\Users\\New\\workspace\\Alex\\Cucumber\\Driver\\chromedriver.exe");
	    WebDriver driver = new ChromeDriver();
	    driver.manage().deleteAllCookies();
	    driver.get("http://demo.guru99.com/telecom/");
	}

	@Given("The user clicks add customer button")
	public void the_user_clicks_add_customer_button() {
	    driver.findElement(By.xpath("//a[text()= 'Add Customer']")).click();
	}

	@When("The user fills all fields")
	public void the_user_fills_all_fields() {
		driver.findElement(By.xpath("//label[text()='Done']")).click();
		driver.findElement(By.id("fname")).sendKeys("Alex");
		driver.findElement(By.id("lname")).sendKeys("Praba");
		driver.findElement(By.id("email")).sendKeys("ap@gmail.com");
		driver.findElement(By.id("message")).sendKeys("salem");
		driver.findElement(By.id("telephoneno")).sendKeys("123345");
	    
	}

	@When("The user clicks submit button")
	public void the_user_clicks_submit_button() {
	    driver.findElement(By.name("submit")).click();
	}

	@Then("The user should see customer ID generated")
	public void the_user_should_see_customer_ID_generated() {
	    
	}
}

