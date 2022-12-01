const {expect} = require("chai");
const {it} = require("mocha");
// Due date: Nov 21 (Mon)

/**
 * TC-1: https://www.facebook.com/
 * Facebook: Verify current date is displayed on Sign-Up form
 * 
 * 
 * 
 * Steps:
 * 1. Launch facebook.com
 * 2. Click Create New Account button
 * 3. Verify current date is displayed in Date of birth dropdowns
 *
 */

describe('Verify current date is displayed on Sign-Up form', () => {

    it('Testcase on current date is displayed on Sign-Up form', async () => {

    await browser.url('/')
   // Click Create New Account button
    const createNewAccountButton = await $('=Create new account');
    createNewAccountButton.click();

    await browser.pause(1000)

    //Verify current date is displayed in Date of birth dropdowns
    const dayDropdown = await $(`#day`);
    dayDropdown.getText()


    const monthDropdown = await $(`#month`);
    monthDropdown.getText()

    const yearDropdown = await $(`#year`);
    yearDropdown.getText()
    expect( dayDropdown && monthDropdown && yearDropdown,`Not working`).to.be.true;

    await browser.pause(1000);


     })

})


/**
 * TC-2: https://www.facebook.com/
 * Facebook: Verify user gets error when submits empty login form
 * 
 * Expected error msg -> The email address or mobile number you entered isn't connected to an account.
 */
 describe(' Verify user gets error when submits empty login form', () => {

    it('', async () => {

        await browser.url('/');

        await $('#loginbutton').click();
        const loginError = await $(`//div[@class='_9ay7']`);
        const isLoginErrorDisplayed = await loginError.isDisplayed();
        expect(isLoginErrorDisplayed, 'The email address or mobile number you entered isn\'t connect to an account').to.be.true;

     await browser.pause(1000);

     })

})

/**
 * TC-3: https://www.facebook.com/
 * Facebook: Verify user gets error when submit empty login on messenger screen
 * 
 * 1. Click Messenger
 * 2. Verify "Keep me signed in" is NOT selected
 * 3. Click "Log in" button
 * 4. Verify link (Find your account and log in.) is displayed
 * 5. Verify "Continue" button is enabled
 * 6. Click "Keep me signed in" checkbox
 * 7. Verify "Keep me signed in" is selected
 * 
 */
 describe('Verify user gets error when submit empty login on messenger screen', () => {

    it('Testcases for messenger', async () => {


    await browser.url('/');
   // Click Messenger
        await $('=Messenger').click;

        await browser.pause(1000);

    //Verify "Keep me signed in" is NOT selected
    const keepMeSignedIn = await $('//input[@type="checkbox"]').isSelected;
    console.log( `keepMesSignedIn -> ${keepMeSignedIn}`);
    

    await browser.pause(1000);

    //click login button
    const loginButton = await $('<button>');
    loginButton.click();

    await browser.pause(1000);


    //Verify link (Find your account and log in.) is displayed

    const loginErrorLink = await $('*=Find your account and login in.').isDisplayed;
    console.log(`loginErrorLink -> ${loginErrorLink}`);
  

    await browser.pause(1000);

    //Verify "Continue" button is enabled
     const continueButtonEnabled = await $('#loginbutton').isEnabled;
     console.log(`continueButtonEnabled -> ${continueButtonEnabled}`)
     

        await browser.pause(1000);

     //Click "Keep me signed in" checkbox
     const keepSgnInButton = await $('=before');
      keepSgnInButton.click();

      await browser.pause(1000);

     //Verify "Keep me signed in" is selected
     const kpMeSignedIn = await $('//input[@type="checkbox"]');
     const kpMeSignedInSelected = await kpMeSignedIn.isSelected();
     console.log(`kpMeSignedIn -> ${kpMeSignedInSelected}`);

     await browser.pause(1000);

     })

})

/**
 * TC-4: https://www.darksky.net/
 * Darksky: Verify feelsLikeTempValue is in between lowTempValue and highTempValue
 * 
 * 31˚(string) -> 31(string) -> 31(number)
 * 25˚(string) -> 25(string) -> 25(number)
 * 39˚(string) -> 39(string) -> 39(number)
 * 
 * feelsLikeTempValue <= lowTempValue AND feelsLikeTempValue <= highTempValue
 * 
 */

 describe(' Verify feelsLikeTempValue is in between lowTempValue and highTempValue', () => {

   it('Testcase for Temperature', async () => {

       await browser.url(`https://www.darksky.net/`);

     

      const feelsLikeTempValue = Number(await $(`//span[contains(text(),'Feels Like')]`).getText());
      const lowTempValue = Number(await $(`//span[contains(text(),'Low')]`).getText());
      const highTempValue = Number(await $(`//span[contains(text(),'High')]`).getText());
      expect( feelsLikeTempValue <= highTempValue && feelsLikeTempValue >= lowTempValue,`Not working`);

      await browser.pause(1000)


    })

     

});




