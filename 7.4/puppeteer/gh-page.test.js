let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/");
});

afterEach(async () => {
  await page.close();
});

describe("GitHub main page header tests", () => {
  test("Main page h1 exists", async () => {
    await page.waitForSelector("h1");
    const headerText = await page.$eval("h1", (el) => el.textContent);
    expect(headerText.length).toBeGreaterThan(0);
  }, 10_000);

  test("Main page title contains GitHub", async () => {
    const title = await page.title();
    expect(title).toContain("GitHub");
  }, 10_000);

  test("The page contains Sign up button", async () => {
    const signUpSelector = "button.CtaForm-primaryAction";
    await page.waitForSelector(signUpSelector, {
      visible: true,
    });
    const actual = await page.$eval(signUpSelector, (link) => link.textContent);
    expect(actual).toContain("Sign up for GitHub");
  }, 30_000);
});
