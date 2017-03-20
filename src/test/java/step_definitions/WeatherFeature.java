package step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helpers.DataHelper;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import pageobjects.GooglePage;
import pageobjects.WeatherPage;

import java.util.HashMap;
import java.util.List;

public class WeatherFeature {

    public WebDriver driver;
    public List<HashMap<String,String>> datamap;

    private String city_code;
    private String cur_temp;

    public WeatherFeature()
    {
    	driver = Hooks.driver;
     	datamap = DataHelper.data(System.getProperty("user.dir")+"//src//test//resources//testData/weather.xlsx","Sheet1");

        System.out.println("Printing current data set...");
        for(HashMap h:datamap)
        {
            System.out.println(h.keySet());
            System.out.println(h.values());
        }
    }

    @Given("^Zip code of city excel row \"(.*?)\" is found$")
    public void getCityZipCode(String arg1) throws Throwable {
        PageFactory.initElements(driver, GooglePage.class);
        int index = Integer.parseInt(arg1)-2;

        GooglePage.NavigateToPage();
        GooglePage.SearchForCityCode(datamap.get(index).get("city"));
        city_code = GooglePage.GetCityCode();

    }

    @When("^Current weather for city zip code is obtained$")
    public void getCityWeather() throws Throwable {
        PageFactory.initElements(driver, WeatherPage.class);

        WeatherPage.NavigateToPage();
        cur_temp = WeatherPage.SearchForCityWeather(city_code);
    }

    @Then("^Current weather should be the same as in excel row \"(.*?)\" dataset$")
    public void checkCityWeather(String arg1) throws Throwable {
        int index = Integer.parseInt(arg1)-2;
        Assert.assertEquals(datamap.get(index).get("weather"), cur_temp);
    }
}