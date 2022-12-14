describe('WaitFor Concept', () => {
    
    /**
     * wait
     * sleep
     * 
     * 
     * waitForDisplayed()   - to wait until the element is displayed on the screen
     * waitForClickable()   - to wait until the element is clickable
     * waitForEnabled()     - to wait until the element is enabled
     * waitForExist()       - to wait until the element exists in the dom
     * waitUntil()          - to wait until mention condition(s) are true
     *                         
     * 
     * waitUntil()
     *      takes async function as input
     *      waitUntil keeps executing the input-function until it returns true
     *      1. takes async function as input
     *      2. async function must return a boolean
     *      3. wait until the condition result into true within wa-time-period.
     * 
     * 
     * 
     * For all wait-functions, we need to set some attributes:
     *      timeout - defines the maximum time (milliseconds) browser should wait for condition to be true
     *      timeoutMsg - defines error message to be displayed in wait-time is over
     *      reverse - true/false - defines the wait until the condition is false
     * 
     */

    it('waitForDisplayed example', async () => {

        await browser.url('/');

        await $('//a[text()="Create new account" or text()="Create New Account"]').click();

        await $('#day').waitForDisplayed({
            timeout: 120000,
            timeoutMsg: 'Date dropdown is not displayed'
        })

        await $('#day').click();
        
    });

    it('waitForClickable example', async () => {
        
        await browser.url('/');

        await $('<button>').waitForClickable({
            timeout: 60000,
            timeoutMsg: 'Element is not clickable'
        });

        await $('#email').setValue('abcd@1234');
        await $('#pass').setValue('abcd@1234');
        await $('<button>').click();
    });

    it('waitForEnabled example', async () => {
        
        await browser.url('/');

        await $('<button>').waitForEnabled({
            timeout: 60000,
            timeoutMsg: 'Element is not enabled'
        });

        await $('#email').setValue('abcd@1234');
        await $('#pass').setValue('abcd@1234');
        await $('<button>').click();
    });

    it('waitUntil example', async () => {
        await browser.url('/');

        // keep waiting until the pageTittle contains 'facebook' [while ignoring cases]

        await browser.waitUntil(async () => {
            const pageTitle = await browser.getTitle();
            return pageTitle.toLowerCase().includes('facebook');
        }, {
            timeout: 5000,
            timeoutMsg: 'Facebook heading is it as it used to be'
        });

    });

    it.only('waitUntil example-2', async () => {
        await browser.url('https://www.hotels.com/');
        await $('//button[@aria-label="Going to"]').click();
        await $('#destination_form_field').setValue('NeW');

        // keep waiting until the autosuggestion is displayed 

        await browser.waitUntil(async () => {
            const totalSuggestions = await $$('//div[@class="truncate"]//strong');
            return totalSuggestions.length >= 8
        }, {
            timeout: 5000,
            timeoutMsg: 'Facebook heading is it as it used to be'
        });

    });


});