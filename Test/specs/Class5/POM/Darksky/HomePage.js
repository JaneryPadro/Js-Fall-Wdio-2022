class HomePage {


//Locators for web-Elements on the LoginErrorPage (variables)

searchBarField = '//input[@type="text"]';
searchButton = '//img[@alt="Search Button"]';
feelLikeTemp = `//span[contains(text(),'Feels Like')`;
lowTemp = `//span[contains(text(),'Low')]`;
highTemp = `//span[contains(text(),'High')]`;






// functions to interact with the web-Elements on the LoginPage
async searchBar(userSearch){
    await $(this.searchBarField).setValue(userSearch);
}

async clickSearch(){
    await $(this.searchButton).click();
}

async nowFeelsTemp(){
    await $(this.feelLikeTemp).getText();
}

async nowLowTemp(){
    await $(this.lowTemp).getText();
}

async nowHighTemp(){
    await $(this.highTemp).getText();
}
};

module.exports = HomePage
