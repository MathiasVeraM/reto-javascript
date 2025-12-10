# RETO DIA 15 WES BOS - LOCALSTORAGE

Este proyecto es una pequeña aplicación en **vanilla JavaScript, HTML y CSS** que permite gestionar una lista de tareas (tapas, al ser recetas que tenemos que terminar de hacer). Incluye las funcionalidades esenciales de agregar, marcar como completado, eliminar y guardar los datos en el navegador usando `localStorage`.

El ejercicio está inspirado en el **Día 15 del curso JavaScript30 de Wes Bos**, y también me basé en las ideas explicadas en este artículo de DEV Community:

**“How I used LocalStorage and Event Delegation in a list of items” – Raquel Santos**  
https://dev.to/raquelsartwork/how-i-used-localstorage-and-event-delegation-in-a-list-of-items-1h52

---

## 🧑‍💻 ¿Qué hace este proyecto?

- Permite agregar nuevos items desde un formulario.
- Muestra una lista que se actualiza dinámicamente.
- Permite marcar los items como completados (checkbox).
- Permite eliminar items individualmente.
- Guarda toda la información en `localStorage` para que la lista se mantenga incluso al recargar la página. Y no sea necesario tener una base de datos
- Utiliza **event delegation**, lo que permite manejar clics en botones y checkboxes desde un único listener.

---

## 🔥 Tecnologías utilizadas

- **HTML5** — Estructura del formulario y la lista.
- **CSS3** — Estilos, layout con flexbox, y diseño visual.
- **JavaScript (ES5+)**:
  - Manipulación del DOM.
  - `localStorage` para persistencia.
  - Delegación de eventos.
  - Construcción dinámica de elementos con plantillas (`innerHTML`).

---

## 📁 Estructura del proyecto

```
├── images
    └── logo_restaurant.png
├── index.html
├── README.md
├── style.css
└── script.js
```

---
## 🧠 ¿Cómo funciona?

### 1. Carga inicial
Al abrir la página, el script:
- Obtiene los items guardados en `localStorage` (si existen).
- Si no existen, inicia un arreglo vacío.
- Renderiza la lista en el DOM.

### 2. Agregar items
Cuando el usuario envía el formulario:
- Se previene el comportamiento por defecto del navegador.
- Se toma el texto del input.
- Se crea un objeto `{ text, done: false }`.
- Se agrega al arreglo global `items`.
- Se guarda todo en `localStorage`.
- Se vuelve a renderizar la lista en pantalla.

### 3. Marcar como completado
Usando **event delegation**, un solo listener detecta clics dentro del `<ul>`.  
Si el clic proviene de un checkbox:
- Se obtiene el índice desde `data-index`.
- Se invierte la propiedad `done`.
- Se guarda en `localStorage`.
- Se repinta la lista.

### 4. Eliminar items
De igual manera, si el clic proviene de un botón:
- Se obtiene el índice desde `data-delete`.
- Se usa `splice()` para eliminar el item.
- Se guarda en `localStorage`.
- Se repinta la lista.

---

## 🚀 Cómo usarlo

1. Abre `index.html` en cualquier navegador moderno.
2. Escribe un nuevo item y presiona “+ Add Item”.
3. Marca los items como completados o elimínalos.
4. Recarga la página: los datos se mantienen gracias a `localStorage`.

o también puedes

1. Ir a la URL: [Link deployado](https://mathiasveram.github.io/reto-javascript/)
2. Probarlo desplegado en Github Pages

---

## 📚 Inspiración y aprendizaje

Este ejercicio me ayudó a entender y practicar:
- Cómo usar **localStorage** para persistir información.
- Cómo funciona **event delegation** para manejar elementos dinámicos.
- Cómo manipular el DOM para crear interfaces simples sin necesidad de frameworks.
- Uso de JavaScript para agregar, eliminar y actualizar elementos en una lista.

El proyecto toma ideas del reto **Day 15 – LocalStorage and Event Delegation** del curso JavaScript30 de Wes Bos, y del artículo de Raquel Santos publicado en DEV Community.

---

## ✔️ Mejoras futuras (opcional)

- Botón para borrar toda la lista.
- Modo oscuro.
- Animaciones de entrada/salida para cada item.
- Edición de items existentes.
- Filtros de: *todos / completados / pendientes*.

---

¡Proyecto simple, práctico y perfecto para aprender JavaScript real sin frameworks!  