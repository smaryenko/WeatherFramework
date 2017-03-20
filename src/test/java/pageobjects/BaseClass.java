package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public abstract class BaseClass {
    public static WebDriver driver;
    public static WebDriverWait waitDriver;

    public  BaseClass(WebDriver driver){
        BaseClass.driver = driver;
        BaseClass.waitDriver = new WebDriverWait(driver, 5);
    }

}
