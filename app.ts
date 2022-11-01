import puppeteer from 'puppeteer';
import { scrollPageToBottom } from 'puppeteer-autoscroll-down';
(async ()=>{
    const browser = await puppeteer.launch({
        headless:false
    });
    const page:any = await browser.newPage();
    await page.goto('https://www.youtube.com/c/KanalukrainaTvOfficial/videos');
    await page.waitForTimeout(3000);
    const lastPosition = await scrollPageToBottom(page, {
        size: 450,
        delay: 250
    });
    await page.click('#items > .ytd-grid-renderer:first-child');
    await page.waitForTimeout(6000);

    await browser.close();
})();