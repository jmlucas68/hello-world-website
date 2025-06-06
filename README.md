# Hello World POC - React App

Una página web React elegante y moderna como Prueba de Concepto (POC) para GitHub Pages.

## 🌟 Características

- **Diseño moderno**: Interfaz con gradientes atractivos y efectos glassmorphism
- **Responsivo**: Optimizado para dispositivos móviles y desktop
- **Tecnologías modernas**: React 18, TypeScript, Vite, TailwindCSS
- **Lista para producción**: Configurada para despliegue en GitHub Pages

## 🚀 Tecnologías Utilizadas

- **React 18.3** - Framework frontend
- **TypeScript** - Tipado estático
- **Vite** - Herramienta de build rápida
- **TailwindCSS** - Framework de CSS utility-first
- **Radix UI** - Componentes accesibles

## 📋 Contenido

La página incluye:

- ✅ Título principal: "Hello World"
- ✅ Subtítulo: "Mi primera página con React"
- ✅ Fecha actual dinámica
- ✅ Mensaje: "Esta es una POC de página web con React"
- ✅ Tarjetas informativas de las tecnologías utilizadas
- ✅ Footer con mensaje de desarrollo

## 🛠️ Desarrollo Local

### Prerrequisitos

- Node.js (versión 18 o superior)
- pnpm (recomendado) o npm

### Instalación

```bash
# Clonar el repositorio
git clone <tu-repositorio>
cd hello-world-poc

# Instalar dependencias
pnpm install

# Ejecutar en modo desarrollo
pnpm dev

# Acceder a http://localhost:3000
```

### Build para Producción

```bash
# Crear build optimizado
pnpm build

# Vista previa del build
pnpm preview
```

## 📦 Despliegue en GitHub Pages

### Configuración

1. **Configurar base URL**: El proyecto está configurado con `base: './'` en `vite.config.ts` para rutas relativas
2. **Branch de despliegue**: Los archivos de build se encuentran en la carpeta `dist/`

### Pasos para GitHub Pages

1. Sube el proyecto a tu repositorio de GitHub
2. Ve a Settings > Pages en tu repositorio
3. Selecciona "Deploy from a branch"
4. Elige la rama donde subirás los archivos de `dist/`
5. La página estará disponible en `https://tu-usuario.github.io/hello-world-poc/`

### Scripts Útiles

```bash
# Desarrollo
pnpm dev

# Build para producción
pnpm build

# Lint del código
pnpm lint

# Vista previa del build
pnpm preview
```

## 🎨 Estructura del Proyecto

```
hello-world-poc/
├── public/
│   └── images/          # Imágenes estáticas
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── lib/            # Utilidades
│   ├── App.tsx         # Componente principal
│   └── main.tsx        # Punto de entrada
├── dist/               # Archivos de build
├── vite.config.ts      # Configuración de Vite
└── package.json        # Dependencias y scripts
```

## 🎯 Características del Diseño

- **Gradiente de fondo**: Azul a púrpura con efectos de transparencia
- **Glassmorphism**: Efectos de vidrio con blur y transparencias
- **Animaciones sutiles**: Efectos hover y pulse en elementos interactivos
- **Grid responsivo**: Layout que se adapta a diferentes tamaños de pantalla
- **Tipografía moderna**: Uso de gradientes en texto y jerarquía clara

## 📱 Responsividad

- **Mobile First**: Diseñado primero para dispositivos móviles
- **Breakpoints**: Adaptación automática para tablet y desktop
- **Touch Friendly**: Elementos interactivos optimizados para touch

## 🔧 Personalización

Para personalizar la aplicación:

1. **Colores**: Modifica las clases de TailwindCSS en `App.tsx`
2. **Contenido**: Edita los textos en el componente principal
3. **Fecha**: La fecha se actualiza automáticamente
4. **Tecnologías**: Modifica las tarjetas en la sección correspondiente

## 🌐 Demo en Vivo

La aplicación está desplegada y disponible en:
**https://moxd7rqlhn.space.minimax.io**

## 📄 Licencia

Este proyecto es una POC de código abierto. Siéntete libre de usar, modificar y distribuir.

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📞 Soporte

Si tienes alguna pregunta o problema, por favor abre un issue en el repositorio.

---

**Desarrollado con ❤️ para GitHub Pages**
