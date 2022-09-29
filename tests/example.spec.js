// @ts-check
const { test, expect } = require("@playwright/test");

test("homepage has Playwright in title and get started link linking to the intro page", async ({
  page,
}) => {
  await page.goto("http://localhost:3000");

  // Expect a title "to contain" a substring.

  // create a locator
  const getStarted = page.locator("data-testid=Kontakt");
  await expect(getStarted).toContainText("Kontakt");
});
