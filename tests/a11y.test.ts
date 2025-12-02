import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility', () => {
    test('homepage should not have any automatically detectable accessibility issues', async ({ page }) => {
        await page.goto('/');

        // Wait for content to load
        await page.waitForSelector('main');

        const accessibilityScanResults = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
            .analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('movie detail page should not have any automatically detectable accessibility issues', async ({ page }) => {
        // Go to a movie detail page (assuming one exists, e.g., first one from homepage)
        await page.goto('/');
        await page.waitForSelector('.movie-card');
        const firstMovieLink = await page.getAttribute('.movie-card a', 'href');

        if (firstMovieLink) {
            await page.goto(firstMovieLink);
            await page.waitForSelector('main');

            const accessibilityScanResults = await new AxeBuilder({ page })
                .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
                .analyze();

            expect(accessibilityScanResults.violations).toEqual([]);
        }
    });

    test('search page should not have any automatically detectable accessibility issues', async ({ page }) => {
        await page.goto('/tim-kiem');
        await page.waitForSelector('main');

        const accessibilityScanResults = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
            .analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });
});
