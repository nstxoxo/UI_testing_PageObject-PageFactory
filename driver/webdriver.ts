import {path} from "chromedriver";
import Chrome from "selenium-webdriver/chrome";
import {Builder, WebDriver} from "selenium-webdriver";

const service = new Chrome.ServiceBuilder(path);
export const driver: WebDriver = new Builder().forBrowser("chrome").setChromeService(service).build();