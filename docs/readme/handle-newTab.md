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

# Handling Multiple Elements in Playwright

We'll be storing multiple elements in a variable then loop though it and verify the text content

### Step 1: [Validation] Expect the element count to be n
```javascript
await expect(page.locator('li')).toHaveCount(n);
```

### Step 2: store elements in a variable
#### Note: 
page.$$('li') will return an array of ElementHandles, while page.locator('li') will return an object of Locator for more flexible, retry-able interactions with elements. It provides better control for dynamic content.
```javascript
let lElements = await page.locator('li');
OR
let elHandlerElements = await page.$$('li');
```
### Step 3: create an array and loop through the elements stored
```javascript
let textArr =["text 1", "text 2", "text 3"];
for(let i = 0; i <await lElements.count(); i++) {
   await expect(await lElements.nth(i).innerText()).toBe(textArr[i]);
} 

OR

for(let j = 0; j < elHandlerElements.length; j++) {
   await expect(await elHandlerElements[i].textContent()).toBe(textArr[i]);
}
```
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[singhjyoti010](https://github.com/singhjyoti010)