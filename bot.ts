import puppeteer  from "puppeteer";

(async ()=>{
    const browser = await puppeteer.launch({
        headless: false
    });
    const page:any = await browser.newPage();
    await page.goto('https://www.google.com/intl/uk/gmail/about/', {waitUntil:'domcontentloaded'});
    await page.waitForTimeout(3000);
    await page.click('a[data-action = "sign in"]', {clickCount: 5});
    await page.waitForTimeout(3000);
    await page.type('input[type = "email"]', 'bogdan.mitsevski@gmail.com', {delay:200});
    await page.click('#identifierNext');
    await page.waitForTimeout(3000);
    await page.type('input[type = "password"]', 'HESOYAM2718', {delay:200});
    await page.click('#identifierNext');
    await page.waitForTimeout(3000);
})();