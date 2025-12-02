import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        baseURL: 'http://localhost:4321',
    },
    webServer: {
        command: 'yarn dev',
        url: 'http://localhost:4321',
        reuseExistingServer: true,
    },
});
