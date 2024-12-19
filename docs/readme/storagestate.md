# Notes

With the help of Storage state or reusable state, we don't have to login an application multiple times, every test will have a single storage state and login will happen just once for all.

Steps
----------------------------
1. Create a new file in the same folder/directory where tests is present, lets call it global.setup.ts [or js or mjs or whatever language one prefers]

 ```javascript
 import { test as setup } from '@playwright/test';
import { LoginPage } from "../pageobjects/login.page";

let loginPage: LoginPage;
const email = process.env.USER_EMAIL!;
const password = process.env.USER_PASSWORD!;

setup('login setup', async ({page }) => {
    // in case we want to clearCookies and reset the settings
    await page.context().clearCookies();
    console.log('logging in...');
    loginPage = new LoginPage(page);
    await loginPage.login(email, password);
    await page.context().storageState({ path: ".auth/user.json" })
});

```

below line will create a new json file and store the common login state of user
```
context().storageState({path: "./somePath.json"})
```

2. update the config file to make use of storage step and add a common setup, which will run everytime the project/worker runs
```javascript
import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import path from 'path';


//if we have something stored in .env
dotenv.config({ path: path.resolve(__dirname, '.env') });
export default defineConfig({
  .....
  workers: 1,
  use: {
    //we can also globally give the location of auth.json here, or project wise
    //storageState: `.auth/user.json`
  },

  projects: [
    {
      name:"setup",
      use: {
        ...devices['Desktop Chrome'],
      },
      testMatch: /global\.setup\.ts/
    },
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        storageState: `.auth/${process.env.USER_AUTH}`
      },
      dependencies: ['setup']
    },
});
])
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[singhjyoti010](https://github.com/singhjyoti010)