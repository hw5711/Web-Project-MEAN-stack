
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false }); 
    const page = await browser.newPage();
    //const page2 = await browser.newPage();
    await page.goto('localhost:4200');

    await page.waitFor(1000);
    await page.click('a[name="login"]');
    await page.screenshot({ path: 'login.png' });
    await page.waitFor(1000);
    await page.type('input[name=email]', 'test1@gmail.com');
    await page.type('input[name=password]', '1');
    await page.screenshot({ path: 'mainPage.png' });
    await page.waitFor(1000);
    await page.click('button[name="login"]');
    await page.waitFor(1000);
    await page.click('a[name="election"]');
    await page.waitFor(2000);
    await page.click('button[name="show"]');
    await page.screenshot({ path: 'beforeVote.png' });
    await page.waitFor(2000);
    const result = await page.evaluateHandle(() => {
        return document.querySelector(
            '#mat-radio-3 > label > div.mat-radio-container > div.mat-radio-outer-circle'
        );
    })
    result.click();
    await page.waitFor(2000);
    await page.click('button[name="submit"]');
    await page.waitFor(2000);
    await page.click('button[name="show"]');
    await page.waitFor(2000);
    await page.screenshot({ path: 'afterVote.png' });
    await browser.close();
})();
