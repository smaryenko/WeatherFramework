package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.util.List;

public class WeatherPage extends BaseClass{

    public WeatherPage(WebDriver driver)
    {
        super(driver);
    }

    public static String PageUrl = "http://weatherunderground.com";

    public static By search_field = By.name("query");

    public static By current_temperature_container = By.id("curTemp");

    public static void NavigateToPage()
    {
        driver.get(WeatherPage.PageUrl);
    }

    public static String SearchForCityWeather(String cityCode)
    {
        waitDriver.until(ExpectedConditions.presenceOfElementLocated(search_field));
        driver.findElement(search_field).sendKeys(cityCode);
        driver.findElement(search_field).sendKeys(Keys.RETURN);

        waitDriver.until(ExpectedConditions.presenceOfElementLocated(current_temperature_container));
        return driver.findElement(current_temperature_container).getText();
    }
}
