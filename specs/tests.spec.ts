import { HomePage } from "../pages/HomePage";
import {TechSupportPage} from "../pages/TechSupportPage";
import { PageFactory } from "../pages/PageFactory";
import {driver} from "../driver/webdriver";
import  assert  from "assert";
import {expect} from "chai";
import { SearchPage } from "../pages/SearchPage";

describe("Habr testing", () => {

    before( async () => {
        await PageFactory.getPage(driver, "Base").visitPage()
    });

    afterEach(async () => {
        await PageFactory.getPage(driver,"Base").getWindowHandle();
    });

    after(async () => {
        await PageFactory.getPage(driver, "Base").closeBrowser()
    });

    it("Habr development page", async () => {
        const homePage = PageFactory.getPage(driver, "Home") as HomePage
        await homePage.clickDevelopment()
        expect(await homePage.clickDevelopment()).to.equal("Разработка");
    });

    it("Habr search page", async () => {
        const searchPage = PageFactory.getPage(driver, "Search") as SearchPage
        await searchPage.clickSearch()
        expect(await searchPage.getSearchDropdownText()).to.equal("по релевантности");
    });

    it("'How to become an author' page", async () => {
        const homePage = PageFactory.getPage(driver, "Home") as HomePage
        await homePage.becomeAuthor()
        assert(homePage.checkWriteAPost(), "Page is not opened")
    });

    it ("Habr support page", async () => {
        const homePage = PageFactory.getPage(driver, "TechSupport") as TechSupportPage
        await homePage.techSupport()
        assert(homePage.checkButtonSendFeedback(), "Page is not opened")
    })

    it ("Habr search failed text", async () => {
        const searchPage = PageFactory.getPage(driver, "Search") as SearchPage 
        await searchPage.checkSearchFieldFailed()
        expect (await searchPage.getSearchFailedText()).to.equal("К сожалению, здесь пока нет ни одной публикации");
    });

})