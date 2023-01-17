// @ts-check
import { test, expect } from "@playwright/test";

test("Page should have title 'TODO'", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/fe/src/index.html");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/TODO/);
});

test("'Dodaj novi task' button should be visible", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/fe/src/index.html");

  await expect(page.getByTestId("createNewTask")).toBeVisible();
});

test("Form for entering new tash should be hidden", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/fe/src/index.html");

  await expect(page.getByTestId("addTaskForm")).toBeHidden();
});

test("On click to 'Dodaj novi task' button, form should be revealed", async ({
  page,
}) => {
  await page.goto("http://127.0.0.1:5500/fe/src/index.html");

  await page.getByTestId("createNewTask").click();

  await expect(page.getByTestId("addTaskForm")).toBeVisible();
});

test("Predifined tasks from backend should be visible", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/fe/src/index.html");

  const todos = await page.getByTestId("myTasks");

  await expect(todos).not.toBeEmpty();
});
