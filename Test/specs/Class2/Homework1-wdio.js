const {expect} = require("chai");
const {it} = require("mocha");


describe('Homework - 1' , () => {

it('Testcase homework1', async () => {
    /**
     * Steps:
     * 1. Launch facebook.com
     * 2. Click Create New Account
     * 3. Verify female-gender button is not selected
     * 4. Verify male-gender button is not selected
     * 5. Verify custom-gender button is not selected
     * 6. If female gender is NOT selected, then click on female gender radio button
     * 7. Verify female-gender button is selected
     */

    // 1. Launch facebook.com
    await browser.url('/');

    // 2. Click Create New Account button
    const createNewAccountButton = await $('=Create new account');
    createNewAccountButton.click();

    await browser.pause(2000);

    // 3. Verify female-gender button is not selected
    const femaleRadioButton = await $('input[value="1"]');
    const isFemaleGenderSelected = await femaleRadioButton.isSelected();
    expect(isFemaleGenderSelected, 'Female gender is already selected').to.be.false;

    await browser.pause(2000)

    // Verify male-gender button is not selected
    const maleRadioButton = await $('input[value="2"]');
    const ismaleGenderSelected = await maleRadioButton.isSelected();
    expect(ismaleGenderSelected, 'male gender is already selected').to.be.false;

    await browser.pause(2000)

    // Verify custom-gender button is not selected
    const customGenderRadioButton = await $('input[value="-1"]');
    const iscustomGenderSelected = await customGenderRadioButton.isSelected();
    expect(iscustomGenderSelected, 'custom gender is already selected').to.be.false;

    await browser.pause(2000)

    //If female gender is NOT selected, then click on female gender radio button
    if (!isFemaleGenderSelected) {              // isFemaleGenderSelected === false     <--> !isFemaleGenderSelected
    await femaleRadioButton.click()
    }
   
    
    await browser.pause(2000)


    // Verify female-gender button is selected
    //const FmaleRadioButton = await $('input[value="1"]');
    //const isFmaleGenderSelected = await FmaleRadioButton.isSelected();
    //expect(isFmaleGenderSelected, 'Female gender is not selected').to.be.true;

    if (!isFemaleGenderSelected) {
        //click female gender button
        femaleRadioButton.click();
        //check if button is selected
        const isFemaleGenderSelected = await femaleRadioButton.isSelected();
        expect(isFemaleGenderSelected, "Female gender is already selected").to.be
        .true;}
        await browser.pause(5000);
});


});






