# Pokedex

Proyecto Pokedex simple construido con Angular 20.

Información del proyecto

- Framework: Angular 20 (generado con Angular CLI 20.1.6).
- Objetivo: mostrar una lista de Pokémon y una vista de detalle para cada uno.

Por qué hice este proyecto

Hice el proyecto con el propósito de ver puntos importantes de Angular 20 como repaso y aprender puntos nuevos.

Temas y tecnologías usadas

- Angular 20 / Angular CLI
- TypeScript
- Consumo de API con `HttpClient` (datos desde PokeAPI o formato similar)
- Servicios (`@Injectable`) para separar la lógica de acceso a datos
- Componentes y rutas (lista y detalle)
- Pipes personalizados (ej. `PokeImgPipe` para construir la URL de la imagen)
- `NgOptimizedImage` / manejo de imágenes optimizado (si aplica)
- CSS moderno: Flexbox, diseño responsivo y sombras para tarjetas
- Manejo de errores simple y placeholder para imágenes faltantes

Cómo ejecutar el proyecto (desarrollo)

1. Instalar dependencias (si aún no están instaladas):

```bash
npm install
```

2. Levantar el servidor de desarrollo (Angular):

```bash
ng serve
```

Abre http://localhost:4200/ en tu navegador.

