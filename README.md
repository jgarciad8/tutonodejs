TutoNodeJS

API REST desarrollada con Node.js, Express, Sequelize y PostgreSQL.

El proyecto incluye:
CRUD de clientes.
Autenticación con JWT.
Rutas protegidas.
Ambientes de desarrollo y producción.
Integración con Stripe.
Webhook de Stripe.

Para ejecutar el proyecto en desarrollo:

NODE_ENV=development node server.js

En consola:

$env:NODE_ENV="development"
node server.js

Endpoints:

POST /api/customer/create/ - Crear cliente - Requiere token
GET /api/customer/ - Listar clientes
GET /api/customer/status - Listar clientes activos
GET /api/customer/:id - Obtener cliente por id
PUT /api/customer/update/:id - Actualizar cliente - Requiere token
DELETE /api/customer/delete/:id - Eliminar cliente - Requiere token
DELETE /api/customer/delete/ - Eliminar todos los clientes - Requiere token

POST /api/auth/signup - Registrar usuario
POST /api/auth/signin - Iniciar sesión y obtener JWT

POST /api/pago/crear-sesion - Crear sesión de pago con Stripe
POST /api/pago/webhook - Webhook de Stripe

Para las rutas protegidas se debe enviar el token de esta forma:

Authorization: Bearer TOKEN

Durante el desarrollo local, el webhook de Stripe puede probarse con:

stripe listen --forward-to localhost:8081/api/pago/webhook

En producción el webhook debe configurarse desde el Dashboard de Stripe apuntando a:

https://tutonodejs.onrender.com/api/pago/webhook

En producción no se utiliza stripe listen.

URL pública de la API:

https://tutonodejs.onrender.com