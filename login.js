const puppeteer = require('puppeteer');

function randomString(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
         
        return result;
 }

async function login(){
    
    // 十組測試門號
    const msisdn = ['09xxxxxxxx','09xxxxxxxx','09xxxxxxxx','09xxxxxxxx','09xxxxxxxx','09xxxxxxxx','09xxxxxxxx','09xxxxxxxx','09xxxxxxxx','09xxxxxxxx'];
    // 測試連結
    const testUrl = 'https://xxx.xxx.xxx/';
    
    for(var j=0;j< 10;j++){
        for(var i = 0; i < msisdn.length; i++)
        {
            try{
                const browser = await puppeteer.launch();
                console.log("Opening the browser......");
                const page = await browser.newPage();

                await page.setDefaultNavigationTimeout(0);
                await page.goto(testUrl);
                await page.waitForNavigation()
                await page.type('#UserID', msisdn[i])
                await page.click('[id="login_btn"]')
                await page.waitForNavigation()
                await page.type('#password-field', '1qaz2wsx'+ randomString(3))
                await page.click('[id="loginBtn"]')
                await page.waitForNavigation()
                await browser.close();

                } catch(err) {
                    console.log(err);
                }
                
                console.log('- - - - -第' +j+ i+ '次 - - - Login Finish - - - - - - -');
        }
    }
};

login();