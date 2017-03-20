package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.util.List;

public class GooglePage extends BaseClass{

    public GooglePage(WebDriver driver)
    {
        super(driver);
    }

    public static String PageUrl = "http://google.com/ncr";

    public static By search_field = By.name("q");
    public static By search_button = By.name("btnG");
    public static By zip_codes_container = By.className("rl_container");
    public static By zip_codes_selector = By.className("title");

    public static void NavigateToPage()
    {
        driver.get(GooglePage.PageUrl);
    }

    public static void SearchForCityCode(String cityName)
    {
        waitDriver.until(ExpectedConditions.presenceOfElementLocated(search_field));
        driver.findElement(search_field).sendKeys(cityName + " city zip code");
        waitDriver.until(ExpectedConditions.visibilityOfElementLocated(search_button));
        driver.findElement(search_button).click();
    }

    public static String GetCityCode()
    {
        waitDriver.until(ExpectedConditions.presenceOfElementLocated(zip_codes_container));
        List<WebElement> codes = driver.findElement(zip_codes_container).findElements(zip_codes_selector);
        return codes.get(0).getText();
    }

}
