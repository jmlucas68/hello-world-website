# 📦 Guía de Despliegue en GitHub Pages

Esta guía te ayudará a desplegar tu aplicación "Hello World" en GitHub Pages paso a paso.

## 🚀 Método 1: Despliegue Manual

### Paso 1: Preparar el Repositorio

1. **Crear repositorio en GitHub**
   ```bash
   # En GitHub, crear un nuevo repositorio llamado 'hello-world-poc'
   ```

2. **Clonar y subir el código**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Hello World POC"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/hello-world-poc.git
   git push -u origin main
   ```

### Paso 2: Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Navega a **Settings** > **Pages**
3. En **Source**, selecciona "Deploy from a branch"
4. Selecciona la rama **main** y la carpeta **/ (root)**
5. Haz clic en **Save**

### Paso 3: Subir los Archivos de Build

1. **Crear el build**
   ```bash
   pnpm build
   ```

2. **Crear rama gh-pages** (opcional, método alternativo)
   ```bash
   git checkout --orphan gh-pages
   git rm -rf .
   cp -r dist/* .
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

3. **En GitHub Pages Settings**, cambiar la rama a **gh-pages** si usaste este método

## 🔧 Método 2: Usando GitHub Actions (Recomendado)

### Crear Workflow de GitHub Actions

Crea el archivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        
    - name: Setup pnpm
      uses: pnpm/action-setup@v2
      with:
        version: latest
        
    - name: Install dependencies
      run: pnpm install
      
    - name: Build
      run: pnpm build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### Configurar GitHub Pages para Actions

1. Ve a **Settings** > **Pages**
2. En **Source**, selecciona "GitHub Actions"
3. El workflow se ejecutará automáticamente en cada push a main

## 🌐 URLs de Acceso

Después del despliegue, tu aplicación estará disponible en:

- **URL principal**: `https://TU-USUARIO.github.io/hello-world-poc/`
- **URL personalizada**: Si tienes dominio propio, puedes configurarlo en Settings > Pages

## ✅ Verificación del Despliegue

1. **Verificar que el build es exitoso**
   ```bash
   pnpm build
   # No debe haber errores en la consola
   ```

2. **Probar localmente el build**
   ```bash
   pnpm preview
   # Abrir http://localhost:4173
   ```

3. **Verificar archivos en dist/**
   ```bash
   ls -la dist/
   # Debe contener: index.html, assets/, etc.
   ```

## 🛠️ Solución de Problemas Comunes

### Problema: Página en blanco

**Solución**: Verificar la configuración de `base` en `vite.config.ts`
```typescript
export default defineConfig({
  base: './', // Para rutas relativas
  // o
  base: '/hello-world-poc/', // Para rutas absolutas
})
```

### Problema: Assets no cargan

**Solución**: Asegurar que las rutas sean relativas
```typescript
// En vite.config.ts
base: './'
```

### Problema: 404 en navegación

**Solución**: GitHub Pages no soporta SPA routing por defecto. Para este proyecto simple no es necesario, pero para proyectos con routing:

Crear `public/404.html`:
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Hello World POC</title>
  <script type="text/javascript">
    var pathSegmentsToKeep = 1;
    var l = window.location;
    l.replace(
      l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
      l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
      l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
      (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
      l.hash
    );
  </script>
</head>
<body>
</body>
</html>
```

## 📋 Checklist de Despliegue

- [ ] ✅ Código subido a GitHub
- [ ] ✅ Build ejecutado sin errores (`pnpm build`)
- [ ] ✅ GitHub Pages configurado
- [ ] ✅ URL funcional y accesible
- [ ] ✅ Todos los elementos visuales correctos
- [ ] ✅ Responsividad verificada
- [ ] ✅ README.md actualizado con URL en vivo

## 🎯 Configuración Actual del Proyecto

Este proyecto ya está configurado con:

- ✅ `base: './'` en `vite.config.ts` para rutas relativas
- ✅ Build optimizado para producción
- ✅ Assets organizados correctamente
- ✅ Configuración TypeScript adecuada

## 📞 Soporte

Si encuentras problemas durante el despliegue:

1. Revisa los logs de GitHub Actions (si usas ese método)
2. Verifica que el build local funcione correctamente
3. Comprueba la configuración de GitHub Pages
4. Consulta la [documentación oficial de GitHub Pages](https://pages.github.com/)

---

¡Tu aplicación "Hello World" está lista para brillar en GitHub Pages! 🌟
