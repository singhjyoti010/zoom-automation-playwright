
# Notes

Playwright

playwright is created by Microsoft

wdio is developed by Christian Bromann

application supported: web browser apps, mobile web apps
language: javascript, typescript, java, python, .net
browsers: all modern browsers webkit contains mac browsers
OS: windows, mac os and Linux | Ci is supported
Functional | API | Accesibility testing
built in reporters but custom reporters is also supported
emulate mobile testing but no direct Appium support, it supports devtools emulation



npm playwright -v
npx playwright --help


to run parallel test
npx playwright --workers 3

to run specific file
npx playwright test .\test\example.spec.ts

to run files which has specific string in name example one and two
npx playwright test one two

to run file  with title title (it block), example munni chli bazar
npx playwright test -g "munni chali bazar"

run on specific browser
npx playwright test --project=chromium

headed mode
npx playwright test --headed

debug option
npx playwright test --debug

debug starting from specific line where test starts test(..
npx playwright test example.spec.ts:21 --debug



how to write first test -t4
----------------------------
require('@playwright/test')*
import { test, expect } from '@playwright/test'; OR
const {test, expect} = reqquire('@playwright/test')


playwright test provides a test  function to declare tests and expect function to write assertions


what is a fixture?



how to record our test
using Codegen - a test generator tool
playwright by default comes with a tool called Codegen also called as test gen
with code gen two windows open,
1. a browser window to interact with and
2. playwright inspecter window to record test


step 1: open terminal and run codegen npx playwright codegen
npx playwright codegen
npx playwright codegen --help
npx playwright codegen --browser Chromium

step2: check 2 window opens up, record the test
step 3: paste the script in test file and run it

to run and save recorded script in a test file
npx playwright codegen --target javascript -o .\tests\record2.demo.spec.ts

to emulate devices
npx playwright codegen --device="iPhone11"

npx playwright codegen --color-scheme= dark



trace viewer - t6
-----------------
Trace viewer is a gui tool that helps viewing the executed test along with snapshots, timelines and other details(traces)

how to use trace viewer
step1: open config file and set trace: 'on-first-retry'

step2: save and run a test to fail
step3: check trace.zip file
step4: npx playwright show-trace trace.zip


different ways to open trace zip
go to trace.playwright.dev and drag and drop your zip file


2. set programmatically
…. ,async ({page, context}) =>{
await context.tracing.start({snapshots: true, screenshots: true});
}

await context.tracing.stop({'path where you want ot store the zip'})
…

SHIFT + ALT+ F = to correct formatting in vs code



npx playwright show-trace '\test1_trace.zip
 

hooks
let contect;
test.beforeAll(async({browser}) => {
	context = browser.newContext();
	await context.tracing.start({snapshots: true, screenshots: true});
//we can add this line to remove {page} from each test
	let page = (await context).newPage();
}


test.afterAll(async() => {
	await context.tracing.stop({path: 'test2_trace.zip'})	
})



how to find selectors and locators-t7
------------------------------------
two ways to click
1. await page.click('//[@name = 'uhahaha']')
2. await page.locator('//[@name = 'uhahaha']).click()

await page.locator('//[@name = 'uhahaha']).fill('SinghJyoti)

 
to give xpath there are two ways
1. await page.locator('xpath=//[@name = 'uhahaha']).click()
2. await page.locator('//[@name = 'uhahaha']).click()

 
browser.pause() to pause the execution in headed mode or to open playwright inspector

using tag
1. await page.locator('text=LOGIN').click();
2. await page.locator(':has-text("LOGIN")').click();//will search for everything that has login
3. await page.locator('input:has-text("LOGIN")').click();


there are three ways to open playwright inspector
1. page.pause()
2. running test in debug mode
3. using codegen


to check visibility
await page.locator('').isVisible()
await page.waitForSelector('',{timeout:4000})
await expect(page.locator('')).toHaveCount(1);

assertions - t9
----------
we actually check actual and expected are equal
expect in playwright comes from jest testing library

how to add assertions
1. present/not present
2. visible/hidden
3. enabled/disabled
4. text matches/not matches value
5. element attribute
6. url
7. title
8. page matches screenshot
9. soft assertions


$ - locator handler use id discouraged but it can be used in playwright and is helpful when we want to add condition based testing
i.e in if block
if(await page.$('//'){ console.log('hi') }



await expect(page.locator('').toBeVisible()
.toBeHidden()

to make it softassertion
await expect.soft(page.locator('')).toBeVisible()



await expect(page.locator('')).toHaveText('Kitchen Queen')

await expect(page.locator('')).not.toHaveText('Kitchen Queen')



await expect(page.locator('')).toHaveAttribute('class', 'value')

await expect(page.locator('')).toHaveClass('classValue')


expect(page).toHaveURL('https://www.google.com')
expect(page).toHaveTitle(/.*Kitchen/)


await expect(page).toHaveScreenshot() //the first time it run, it will take the screenshot then from next run onwards it will compare both


how to run test in slow motion and video recording -t10
--------------------------------------------------
steo 1: in config, there is a section called use

video: 'on',
launchOptions: {
slowMo: 1000
},

step2: save and run
step3: video will be present in results folder


we can also set the video recording and slow motion from test(Browser context)

test('...',() =>{
	const browser = await chromium.launch({
		slowMo: 500,
		headless: false
});
	const context = await browser.newContext({
	recordVideo: {
		dir: 'videos/',
		size: {width:800, height: 800}
	}
});
	const page = await context.newPage();
	…..
	await context.close();
})




Hooks and groups -t11
----------------
make some tests done after each test, some test, before test, after test


test.afterAll(async({page}) =>{
await page.close()
})


test.beforeEach(...)

for grouping test, we can make use of mocha describe in playwright viz
test.describe()


Annotation and tags -t12
-------------------------

annotations:
skip
only
skip with condition
fail
fixme
slow

tags:
@smoke
@reg
----


test.skip(..,()=>{})

test(……, =>{
test.fail()
})

test.fixme(…, =>{})

test(……, =>{
test.slow()  //would triple the timeout given in config
})


tags
test('Test login @smoke', async({page}) =>{})

npx playwright test --grep "@smoke"

it is not necessary to write tag as @smoke, we can write it anyway like 'smkero' we wish to however we write it this way for convention basis because eventually we are using node grep to run the test



playwright API testing - t14
----------------------------


npx playwright test --ui

test('API get req',async({request}) => {
	const response = await request.get('https://reqres.in/api/users/2")
	expect(response.status()).toBe(200);
	//to check text from reaponse
	const text = await response.text();
	await expect(text).toContain('Janet');	

	//to write response on console
	console.log(await response.json());

	//POST
	const response = await request.post('https://reqres.in/api/users',{
	data: {
		"name": "Morpheus",
		"job": "leader"
	}
	})

	//PUT
	const response = await request.post('https://reqres.in/api/users/2',{
	data: {
		"name": "Morpheus",
		"job": "leader"
	}
	})

	//DELETE
	const response = await request.delete('https://reqres.in/api/users/2')
})