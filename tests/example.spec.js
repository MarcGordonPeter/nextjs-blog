// @ts-check
const { test, expect } = require("@playwright/test");
test("content ", async ({ page }) => {
  await page.goto("http://localhost:3000");
  const contact = page.locator("data-testid=Kontakt");
  const vision = page.locator("data-testid=Unsere Vision");
  const team = page.locator("data-testid=Unser Team");
  const navbar = page.locator("data-testid=navbar");

  await expect(contact).toContainText("Kontakt");
  await expect(vision).toContainText("Unsere Vision");
  await expect(team).toContainText("Unser Team");
  await expect(navbar).toContainText("KONTAKT");
  await expect(navbar).toContainText("UNSERE VISION");
  await expect(navbar).toContainText("UNSER TEAM");

  const namen = ["Marc", "Michelle", "Jonas", "Felicia", "Lukas", "Jingwen"];
  var arrayLength = namen.length;
  for (var i = 0; i < arrayLength; i++) {
    await expect(team).toContainText(namen[i]);
  }
  await navbar.locator("text=Kontakt").click();
  await navbar.locator("text=Unser Team").click();
  await navbar.locator("text=Unsere Vision").click();
});
