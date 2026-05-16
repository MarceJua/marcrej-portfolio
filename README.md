# Personal Portfolio | Marcelo Juárez

<img width="1921" height="968" alt="Screenshot from 2026-05-15 18-33-08" src="https://github.com/user-attachments/assets/4396ed16-4bdc-4c27-8713-2bea08a8d4f0" />

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![DigitalOcean](https://img.shields.io/badge/DigitalOcean-VPS-0080FF?style=for-the-badge&logo=digitalocean)](https://digitalocean.com/)
[![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions)](https://github.com/features/actions)

Portafolio personal interactivo diseñado para mostrar mi trayectoria académica, proyectos destacados y habilidades técnicas. Construido bajo un enfoque moderno de Frontend y alojado en una infraestructura Cloud segura y automatizada.

🔗 **Live Demo:** [marcrej.lat](https://marcrej.lat)

## Stack Tecnológico (Frontend)

- **Framework:** Next.js (App Router) / React
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion (Scroll animations, transiciones suaves y componentes dinámicos)
- **Tipado:** TypeScript

## Arquitectura Cloud & DevOps

El portafolio no es solo un sitio estático; está desplegado en un entorno de producción real, aplicando prácticas de **SysAdmin** y **DevOps** para garantizar alta disponibilidad y seguridad automatizada.

### Infraestructura

- **Cloud Provider:** DigitalOcean (Ubuntu VPS Droplet).
- **Contenedores:** Despliegue aislado utilizando **Docker** (revisar `Dockerfile` en el repositorio).
- **Reverse Proxy:** Nginx para la gestión del tráfico web y proxy inverso hacia el contenedor interno.
- **CI/CD:** Pipeline de integración y despliegue continuo con **GitHub Actions**. Cualquier _push_ a la rama `main` compila la aplicación y actualiza el servidor en producción automáticamente.

### Medidas de Seguridad Implementadas

Para proteger el servidor de ataques automatizados y vulnerabilidades de red, se implementó el siguiente esquema de seguridad de grado de producción:

1. **Cortafuegos (UFW):** Restricción estricta de puertos, permitiendo únicamente tráfico seguro para HTTP, HTTPS y SSH.
2. **Protección SSH (Fail2Ban):** Monitoreo activo de logs de autenticación a nivel de sistema operativo (`auth.log`). La herramienta bloquea automáticamente direcciones IP tras detectar múltiples intentos fallidos de acceso al servidor.
3. **Nginx Rate Limiting:** Implementación de zonas de memoria para limitar el número de peticiones (10 r/s con ráfagas controladas `burst=20`), previniendo caídas del servicio y mitigando ataques de denegación de servicio (DDoS) a pequeña escala.
4. **Certificados SSL:** Tráfico encriptado de extremo a extremo gestionado de forma automatizada mediante Let's Encrypt.

## Instalación y Ejecución Local

Si deseas correr este proyecto en tu máquina local:

1. Clona el repositorio:
   ```
   git clone https://github.com/MarceJua/marcrej-portfolio.git
   ```
2. Entra al directorio:
   ```
   cd marcrej-portfolio
   ```
3. Instala las dependencias:
   ```
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```
   npm run dev
   ```
5. Abre tu navegador y visita `http://localhost:3000` para ver el portafolio.
