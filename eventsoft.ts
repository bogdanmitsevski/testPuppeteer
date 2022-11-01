import puppeteer, { Browser } from 'puppeteer';
import { scrollPageToBottom } from 'puppeteer-autoscroll-down';
(async () => {
    try {
        const browser = await puppeteer.launch({
            headless: false
        });
        const page: any = await browser.newPage();
        await page.goto('https://eventsoft.com.ua/', { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(3000);

        for (let i = 1; i <= 3; i++) {
            page.$eval(`.row > .col-sm-4:nth-child(${i}) > h2:first-child`, (e: any) => e.innerText).then((value: any) => {
                console.log(value);
            }).catch(function (e:any) {
                console.log(e);
            });
        }
        await browser.close();
    }
    catch (e) {
        console.log(e);
    }

    //await page.click('#navbar > .navbar-right > li:nth-child(5) > .page-scroll:last-child');
    //await page.waitForTimeout(3000);

    //const lastPosition = await scrollPageToBottom(page, {
    //    size: 50,
    //    delay: 250
    //});

    // for (let i = 1; i<=4; i++){
    // h2 = page.$eval(`.row > .col-lg-3:nth-child(${i}) > p:first-child`, (e: any) => e.innerText);
    //  console.log(await h2);
    //  }
    //  await browser.close();
    //console.log(await h1);
})();