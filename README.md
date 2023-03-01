# 🚀 Front-End Test

## Instalación

Para clonar este repositorío necesitarás tener instalado en el ordenador [Git](https://git-scm.com/) y [Node.js](https://nodejs.org/en/download/) (version 16) el cual ya viene con _npm_ instalado. Una vez tengas estas aplicaciones abre un terminal y sigue las instrucciones de abajo:

```
# Clonar este repositorio
https://github.com/migudevelop/prueba-capgemini.git

# Instalar las dependencias (yarn o npm)
npm i

# Levantar el proyecto
npm start
```

## Scripts

A continuación adjunto los scripts principales del proyecto:

```
# Lanzar el proyecto
npm run start

# Construir el proyecto
npm run build

# Lanzar tests del proyecto
npm run test

# Lanzar linter para comprobar errores
npm run lint
```
## Temas incluidos

Se ha añadido un mock server con la dependencia json-server para simular el funcionamiento de la aplicación ya que el endpoint de la API estaba caido. Este servidor de mocks se levantara automaticamente al ejecutar el scrippt:
```
npm run start
```
Aunque tambien se puede ejecutar con el script:
```
npm run mock:server
```

## Formato del código

Para asegurar la calidad del codigo y evitar errores se ha hecho uso de las librerías **ESLint** y **Prettier**. También se ha instalado **Lint Staged** y **Husky** para poder lanzar scripts antes de poder subir commits al repositorio, en este caso se ejecutará ESLint y prettier para comprobar que todo esta correcto. Además se ha añadido **Commitlint** para comprobar que los commits siguen el formato de conventional commits.

## Temas pendientes

A continuación adjunto los lo temas pendientes por falta de tiempo:

```
Realizar más tests unitarios o realizar tests e2e

```

