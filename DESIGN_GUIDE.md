# Guía de Diseño - Banco ANEUPI

Esta guía explica dónde encontrar y cómo editar los estilos principales (colores, fuentes) del proyecto.

## 1. Tipografía (Fuentes)

Las fuentes se configuran en **`src/app/layout.tsx`**.

Actualmente usamos dos fuentes de Google Fonts:
- **Montserrat**: Usada para el texto general (`--font-montserrat`).
- **Bitter**: Usada para los títulos (`--font-bitter`).

### ¿Cómo cambiar una fuente?
1. Abre `src/app/layout.tsx`.
2. Busca la importación de `next/font/google`.
3. Cambia la configuración o añade una nueva fuente.
4. Asegúrate de añadir la variable en el `className` del `<body>`.

```typescript
// Ejemplo en src/app/layout.tsx
const nuevaFuente = NuevaFuente({
  variable: "--font-nueva",
  subsets: ["latin"],
});
// ...
<body className={`${nuevaFuente.variable} ...`}>
```

## 2. Colores y Estilos Globales

Los estilos base y variables se encuentran en **`src/app/globals.css`**.

### Títulos de Secciones (H2)
Para cambiar el color o la fuente de todos los títulos de las secciones ("Noticias", "Servicios en línea", etc.), edita la regla `h2` al final del archivo.

```css
/* src/app/globals.css */
h2 {
  font-family: var(--font-bitter), serif; /* Cambiar fuente */
  color: rgb(37, 70, 106);                /* Cambiar color (RGB o Hex) */
  /* ... */
}
```

## 3. Estilos de Componentes (Tarjetas)

Los colores de fondo de las tarjetas y componentes específicos suelen estar definidos directamente en sus archivos o usan clases de Tailwind.

- **NewsCard** (`src/componentes/NewsCard.tsx`): Busca clases como `bg-white` o colores hex arbitrarios como `bg-[#...]`.
- **ServiceCard** (`src/componentes/ServiceCard.tsx`): Verifica el `className` del contenedor principal.

Si deseas cambiar un color específico de un componente, abre el archivo del componente y busca la clase de color de Tailwind (ej. `text-blue-500`, `bg-gray-100`) o el estilo en línea.
