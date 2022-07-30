import { By } from "selenium-webdriver";
export const becomeAuthorLocator = (By.xpath('//a[@class="tm-header__become-author-btn"]'));
export const adminLocator = (By.xpath('//a[@class="tm-main-menu__item"][2]'));
export const developmentLocator = (By.xpath('//a[@class="tm-main-menu__item"]'));
export const writePostLocator = (By.xpath('//a[@class="tm-write-button"][1]'));
export const searchFieldLocator = (By.xpath('//input[@class="tm-input-text-decorated__input"]'));
export const textDevelopmentLocator = (By.xpath('//h1[@class="tm-section-name__text"]'));
export const searchButtonLocator = (By.xpath('//a[@class="tm-header-user-menu__item tm-header-user-menu__search"]'));
export const searchDropdownLocator = (By.xpath('//div[@class="tm-navigation-dropdown__button-text"]'));
export const feedbackLocator = (By.xpath('//a[@class="tm-footer__link"][1]'))
export const sendButtonLocator = (By.xpath('//button[@class="tm-form__submit base-button"]'));
export const failedTextLocator = (By.xpath('//span[text()="К сожалению, здесь пока нет ни одной публикации"]'))
