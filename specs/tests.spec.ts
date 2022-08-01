import { HomePage } from "../pages/HomePage";
import { TechSupportPage } from "../pages/TechSupportPage";
import { PageFactory } from "../pages/PageFactory";
import { driver } from "../driver/webdriver";
import assert from "assert";
import { expect } from "chai";
import { SearchPage } from "../pages/SearchPage";
import {
  ERROR_MESSAGE,
  INFO,
  TEXT_FOR_DEVPAGE,
  TEXT_FOR_SEARCHPAGE
} from "../constans/constans";

describe("Habr testing", () => {
  before(async () => {
    await PageFactory.getPage(driver, "Base").visitPage();
  });

  afterEach(async () => {
    await PageFactory.getPage(driver, "Base").getWindowHandle();
  });

  after(async () => {
    await PageFactory.getPage(driver, "Base").closeBrowser();
  });

  it("Habr development page", async () => {
    const homePage = PageFactory.getPage(driver, "Home") as HomePage;
    await homePage.clickDevelopment();
    expect(await homePage.clickDevelopment()).to.equal(TEXT_FOR_DEVPAGE);
  });

  it("Habr search page", async () => {
    const searchPage = PageFactory.getPage(driver, "Search") as SearchPage;
    await searchPage.clickSearch();
    expect(await searchPage.getSearchDropdownText()).to.equal(
      TEXT_FOR_SEARCHPAGE
    );
  });

  it("'How to become an author' page", async () => {
    const homePage = PageFactory.getPage(driver, "Home") as HomePage;
    await homePage.becomeAuthor();
    assert(homePage.checkWriteAPost(), ERROR_MESSAGE);
  });

  it("Habr support page", async () => {
    const homePage = PageFactory.getPage(
      driver,
      "TechSupport"
    ) as TechSupportPage;
    await homePage.techSupport();
    assert(homePage.checkButtonSendFeedback(), ERROR_MESSAGE);
  });

  it("Habr search failed text", async () => {
    const searchPage = PageFactory.getPage(driver, "Search") as SearchPage;
    await searchPage.checkSearchFieldFailed();
    expect(await searchPage.getSearchFailedText()).to.equal(INFO);
  });
});
