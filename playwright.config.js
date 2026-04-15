import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

testDir: './test/e2e', // carpeta en la que están los tests (ficheros .test.js o .spec.js)

use: { // configuración del navegador
baseURL: 'http://localhost:5173', // base común para las urls utilizadas en los tests
headless: true, // si queremos ejecutarlos en con UI (false) o no (true)
reporter: [['html'] ], // reporters a utilizar
video: 'on', // on (generar vídeo) / off (no generar) o retain-on-failure (sólo cuando falla) 
trace: 'on' // on (generar) / off (no generar) / on-first-retry (sólo guarda la traza cuando se reintenta por primera vez)
},
webServer: { // arrancar la aplicación antes de ejecutar los tests
command: 'npm run dev', // comando a utilizar para arrancar la app
url: 'http://localhost:5173', // url de la aplicación
reuseExistingServer: true // reutilizar el servidor si ya está en marcha
},
projects: [ // navegadores a utilizar en los tests
{name: 'chromium', use: { browserName: 'chromium' } }, // chromium
]

});