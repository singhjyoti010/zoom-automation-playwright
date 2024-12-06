# Notes

Every new tab/window in Playwright is called as Popup

how to handle new tab
----------------------------
1. start by handling the promise
 ```
 ...await Promise.all(....)
```
2. the Promise.all() above will return a single promise, store it in a variable
```
const [newPage] = await Promise.all([

])
```
3. Inside the Promise.all code, wait for popup handle  to appear before actually oepning it,
#### make sure not to add await before the waitfor popup line
```
const [newPage] = await Promise.all([
	page.waitForEvent('popup'),
])
```
4. Next write the actual code that will trigger the new tab/window handle
```
const [newPage] = await Promise.all([
	page.waitForEvent('popup'),
	await page.click('locator-button-to-open-new-tab')
])
```
5. Now we can interact with this newPage using the NewPage variable we created and if not used at any time, can close it using
```
await newPage.close();
```