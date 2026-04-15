import { test, expect } from '@playwright/test'

test('login correcto', async ({ page }) => { // nuevo test
    await page.goto('/') // navegar a GAUR
    const userInput = page.getByPlaceholder('Introduce tu email')
    const passInput = page.getByPlaceholder('Introduce tu contraseña')
    await userInput.fill('jeremias')
    await passInput.fill('1234')
    const btn = page.getByRole('button', { name: 'Log in' })
    await btn.click()
    const btnLogout = page.getByRole('button', { name: 'Logout' })
    await expect(btnLogout).toBeVisible() 
});