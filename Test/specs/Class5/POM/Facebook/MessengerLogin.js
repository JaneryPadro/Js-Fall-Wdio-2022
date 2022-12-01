class MessengerLogin{

// Locators for web-Elements on the LoginErrorPage (variables)

    loginErrorMsgLocator = '=Find your account and log in.';
    loginEmailLocator = '#email';
    loginPassLocator = '#pass';
    loginButtonLocator = '<button>';
    continueButton = '#loginbutton';
    keepMeSignIn = '//input[@type="checkbox"]';
    forgotPwd = '//a[text()="Forgot your password?"]';

    // functions to interact with the web-Elements on the LoginPage
    async enterLoginEmail(userEmail) {
        await $(this.loginEmailLocator).setValue(userEmail);
    }

    async enterLoginPassword(userPwd) {
        await $(this.loginPassLocator).setValue(userPwd);
    }

    async clickLoginInButton() {
        await $(this.loginButtonLocator).click();
    }
    async isLoginErrorDisplayed() {
        return await $(this.loginErrorMsgLocator).isDisplayed();
    }

    async clickContinueButton() {
        await $(this.continueButton).click();
    }


    async keepMeSignInBx() {   
        await $(this.keepMeSignIn).click();
    
    }

    async clickForgotPwd() {
        await $(this.forgotPwd).click();
    }



};


module.exports = MessengerLogin