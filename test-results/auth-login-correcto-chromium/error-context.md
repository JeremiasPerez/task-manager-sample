# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.test.js >> login correcto
- Location: test/e2e/auth.test.js:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'Logout' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('button', { name: 'Logout' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - navigation [ref=e3]:
      - generic [ref=e4]: Gestor de tareas
      - generic [ref=e5]:
        - link [ref=e6] [cursor=pointer]:
          - /url: /login
          - text: Login
        - link [ref=e7] [cursor=pointer]:
          - /url: /register
          - text: Register
        - button [ref=e9] [cursor=pointer]:
          - generic [ref=e10]: ☀️
          - generic [ref=e11]: 🌙
    - generic [ref=e14]:
      - heading [level=1] [ref=e16]: Inicia sesión
      - generic [ref=e17]:
        - generic [ref=e18]:
          - generic [ref=e19]: Usuario
          - textbox [ref=e20]:
            - /placeholder: Introduce tu email
            - text: jeremias
        - generic [ref=e21]:
          - generic [ref=e22]: Contraseña
          - textbox [ref=e23]:
            - /placeholder: Introduce tu contraseña
            - text: "12345"
        - button [ref=e24] [cursor=pointer]: Log in
      - paragraph [ref=e25]: ¿Todavía sin cuenta? Regístrate
  - dialog "Error!" [ref=e27]:
    - heading "Error!" [level=2] [ref=e32]
    - generic [ref=e33]: Credenciales incorrectas
    - text: "!"
    - button "OK" [active] [ref=e35] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | test('login correcto', async ({ page }) => { // nuevo test
  4  |     await page.goto('/') // navegar a GAUR
  5  |     const userInput = page.getByPlaceholder('Introduce tu email')
  6  |     const passInput = page.getByPlaceholder('Introduce tu contraseña')
  7  |     await userInput.fill('jeremias')
  8  |     await passInput.fill('12345')
  9  |     const btn = page.getByRole('button', { name: 'Log in' })
  10 |     await btn.click()
  11 |     const btnLogout = page.getByRole('button', { name: 'Logout' })
> 12 |     await expect(btnLogout).toBeVisible() 
     |                             ^ Error: expect(locator).toBeVisible() failed
  13 | });
```