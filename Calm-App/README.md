# Calm App 🌷

Proyecto académico de desarrollo web enfocado en herramientas breves de autorregulación para momentos de estrés, ansiedad leve o sobreestimulación.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.8
- Bootstrap Icons 1.13.1
- Google Fonts (DM Sans + Playfair Display)

## Estructura

```text
Calm-App/
├── index.html
├── herramientas.html
├── recursos.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── assets/
│   └── img/
│       ├── calm-flower.svg
│       └── calm-stars.svg
├── .gitignore
└── README.md
```

## Cómo ejecutar

No necesita servidor ni Node.js.

1. Abre la carpeta en Visual Studio Code.
2. Abre `index.html`.
3. Recomendado: instala la extensión **Live Server** y pulsa **Go Live**.
4. Prueba el menú completo:
   - Inicio → Herramientas
   - Herramientas → Recursos y apoyo
   - Recursos → Herramientas / fuentes externas

## Qué partes de la rúbrica cubre

### Menú de navegación
Las 3 páginas tienen navbar consistente y enlaces funcionales.

### Header, contenido y footer
Cada página incluye:
- Header
- Menú
- Main con secciones coherentes
- Footer

### Bootstrap
Se utilizan clases y componentes reales de Bootstrap: container, row, col, navbar, collapse, buttons, modal, progress, forms, etc.

### Personalización
No se deja el diseño predeterminado del framework:
- Variables CSS propias
- Paleta pastel consistente
- Tipografía personalizada
- Tarjetas redondeadas
- Sombras
- Fondos degradados
- Componentes personalizados

### Iconos
Se utiliza Bootstrap Icons.

### Animaciones
- Hover en botones
- Hover en tarjetas
- Transiciones
- Aparición de elementos al entrar en pantalla
- Animación de respiración

### Responsividad
Se aplican breakpoints y grid de Bootstrap + CSS personalizado para:
- Computadora
- Tablet
- Teléfono

### JavaScript
El sitio cuenta con interacción real:
- Modal dinámico de emociones
- Escáner 5-4-3-2-1 por pasos
- Barra de progreso
- Reinicio del ejercicio
- Respiración guiada de 60 segundos
- Formulario/buscador orientativo
- Botón volver arriba

## Fuentes institucionales usadas

- Bootstrap: https://getbootstrap.com/
- Bootstrap Icons: https://icons.getbootstrap.com/
- CONASAMA – Línea de la Vida: https://www.gob.mx/conasama/articulos/linea-de-la-vida-800-911-2000
- CONASAMA – CECOSAMAS: https://www.gob.mx/conasama/es/articulos/que-son-los-centros-comunitarios-de-salud-mental-y-adicciones
- CONASAMA – Directorio: https://www.gob.mx/conasama/documentos/directorio-nacional-de-unidades-de-especialidades-medicas-centros-comunitarios-de-salud-mental-y-adicciones
- Gobierno de México – 911: https://www.gob.mx/911/articulos/que-es-el-911emergencias
- IMSS – Guía de autoayuda: https://www.imss.gob.mx/sites/all/statics/salud/salud_mental/GuiaAutoayuda.pdf

## Importante

Calm App es un proyecto educativo. No diagnostica, no sustituye atención profesional y no pretende atender emergencias. Los datos de contacto deben verificarse directamente en fuentes institucionales antes de una entrega final si el profesor solicita vigencia de la información.

## Presentación para evaluación

Al exponer el proyecto, destaca:

1. Se eligió Bootstrap 5.3.8 por su grid y componentes.
2. El framework fue personalizado con CSS propio para evitar el aspecto predeterminado.
3. La paleta pastel busca reducir ruido visual y mantener una identidad consistente.
4. Las herramientas son interactivas y no solo informativas.
5. Las tres páginas están conectadas mediante el menú.
6. Se contempló responsividad, accesibilidad básica y microinteracciones.
7. La página de recursos enlaza instituciones reales y distingue entre apoyo educativo y atención profesional.

## GitHub Pages

Después de publicar el repositorio en GitHub:

1. Entra al repositorio.
2. Ve a **Settings → Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. Elige la rama `main` y la carpeta `/ (root)`.
5. Guarda.
6. GitHub generará la URL pública del sitio.

