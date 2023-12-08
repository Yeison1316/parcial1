# Primer Parcial 2023 Arquitectura Orientada a Servicios

## Descripción 

Servicio de API REST del primer parcial de la asignatura Arquitectura orientada a servicios (SOA), desarrollado con Node.js , Express y Postgresql.

Esta API permite obtener y almacenar información de productos varios, siempre y cuando el usuario este autenticado, registrando en una base de datos de posgrest. La API cuenta con las siguientes funciones: 

- Autorización median Basic Auth
- Paginación 
- Validación de parametros de entrada
- Manejador de errores


## Instalación

### Clonar el repositorio:
```
    git clone https://github.com/Yeison1316/parcial1.git
    cd back
```

### Instalación Manual

```
    npm install
```

## Tabla de contenido

- [Caracteristicas](#Caracteristicas)
- [Comandos](#Comandos)
- [Variables de Entorno](#Variables-de-Entorno)
- [Estructura del Proyecto](#Estructura-del-Proyecto)
- [API Endpoints](#API-Endpoints)


## Característica
- Node js
- NPM

## Comandos
Run Local:
```
    npm run dev
```
Run Producción:
```
    npm run start
```

## Variables de Entorno
```
###> CONFIG SERVER <####
PORT=5432
URL_SERVER=http:\\localhost:5432\prueba_test
###> CONFIG SERVER <####

###> DB_CONNECTION ### 
DB_URL_PG=postgres:postgres://admin:iesvGYmjnFcikn0s3Uxub3GbFbgquJqb@dpg-cli41m6f27hc739urb00-a.oregon-postgres.render.com/productosdb
###< DB_CONNECTION ###

###> SECRET_KEY ###
SECRET_KEY=ufpso
###< SECRET_KEY ###
```

## Estructura del Proyecto

```
src\
 |--config\         # Variables de entorno y configuración 
 |--controllers\    # Controladores 
 |--middlewares\    # Middleware Personalizados
 |--models\         # Postgrest models (data layer) 
 |--routes\         # Rutas del sistema
 |--services\       # Servicios de conexión BD y Token 
 |--validator\      # Esquemas de validación
 |--index.js        # Express app
```


## API Endpoints

<code>GET /auth</code> 
- **query:** 
    - **username**:  requerido
    - **password**:  requerido

<code>GET /api/producto</code> 
- Request
    - **query**
- Response
    - **success:** boolean   
    - **msg :** string
    - **data :** array
 
<code>GET http://localhost:8080/producto/:id</code> 
- Request
    - **params:**
        - **id**:  requerido
- Response
    - **success :** boolean
    - **msg :** string
    - **data :** json
    
<code>POST http://localhost:8080/producto</code>
- Request
    - **body:**
        - **title** :  requerido
    - **params:**
        - **title** : requerido
        - **price** : requerido
        - **description** : requerido
        - **category_id** : requerido
        - **images** : requerido
- Response
    - **success :** boolean
    - **data :** json
    - **msg :** string 

<code>PUT http://localhost:8080/producto/:id</code>
- Request
    - **body:**
        - **title** : requerido
        - **price** : requerido
        - **description** : requerido
        - **category_id** : requerido
        - **images** : requerido
- Response
    - **success :** boolean
    - **data :** json
    - **msg :** string 

<code>DELETE http://localhost:8080/producto/:id</code> 
- Request
    - **params:**
        - **id** : requerido 
- Response
    - **data :** array
    - **msg :** string 
    - **success :** boolean