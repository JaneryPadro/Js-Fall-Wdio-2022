// Verify male-gender button is not selected
const maleRadioButton = await $('input[value="1"]');
const ismaleGenderSelected = await maleRadioButton.isSelected();
expect(ismaleGenderSelected, 'male gender is already selected').to.be.false;

await browser.pause(7000)

// Verify custom-gender button is not selected
const customGenderRadioButton = await $('input[value="1"]');
const iscustomGenderSelected = await customGenderRadioButton.isSelected();
expect(iscustomGenderSelected, 'custom gender is already selected').to.be.false;

await browser.pause(7000)

//If female gender is NOT selected, then click on female gender radio button
    if(femaleRadioButton = await $('input[value="1"]')){
    const isFemaleGenderSelected = await femaleRadioButton.isSelected();
    expect(isFemaleGenderSelected, 'Female gender is already selected').to.be.false;
    }
await browser.pause(7000)


// Verify female-gender button is selected
const femaleRadioButton = await $('input[value="1"]');
const isFemaleGenderSelected = await femaleRadioButton.isSelected();
expect(isFemaleGenderSelected, 'Female gender is not selected').to.be.true;
