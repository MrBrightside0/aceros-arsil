# Aceros Arsil - Landing Page Corporativa

Sitio web estático desarrollado para Aceros Arsil, enfocado en alto rendimiento, SEO y diseño responsive adaptado al sector industrial.

## 🛠 Stack Tecnológico

* **Framework:** [Astro](https://astro.build/) (v4) - Generación de sitio estático (SSG).
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/) - Diseño responsive y utilidades.
* **Lenguaje:** JavaScript / TypeScript.
* **Iconos:** Assets SVG y PNG optimizados.

## 📂 Estructura del Proyecto

* `src/components/`: Componentes modulares (Navbar, Hero, About, Services, etc.).
* `src/layouts/`: Plantilla base HTML (SEO y metadatos).
* `src/pages/`: Rutas del sitio (index.astro).
* `public/`: Imágenes y activos estáticos (logos, fondos).

## 🚀 Instalación y Desarrollo

Para ejecutar este proyecto localmente:

1.  **Instalar dependencias:**
    ```bash
    npm install
    ```

2.  **Iniciar servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    El sitio correrá en `http://localhost:4321`.

3.  **Compilar para producción:**
    ```bash
    npm run build
    ```
    Genera la carpeta `dist/` lista para subir al servidor.

## 📝 Notas Técnicas

* **Navbar:** Se implementó una lógica de `md:hidden` y `md:block` para cambiar entre el menú móvil y de escritorio sin conflictos de layout.
* **Responsive:** Se utilizaron breakpoints personalizados de Tailwind para ajustar imágenes y márgenes negativos en la sección "Acerca de".
* **Formularios:** El formulario de contacto es frontend. Se requiere integrar un servicio de backend o API (como Formspree) para el envío de correos.

---
*Desarrollado para Aceros Arsil.*