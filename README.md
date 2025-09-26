# Backend Base - NestJS + PostgreSQL + Docker

## 🚀 Requisitos
- Node.js v18+
- npm
- Docker y docker-compose
- Git

## 📦 Instalación local

1. Clonar el repositorio y entrar en la carpeta:
```bash
git clone https://github.com/juandiazp/pwa-backend.git
cd PWA-Backend
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear archivo `.env` y rellenar con los datos de PostgreSQL:
```bash
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=<usuario>
DB_PASSWORD=<passwprd>
DB_NAME=pwa-backend
```

4. Levantar la aplicación en modo desarrollo:
```bash
npm run start:dev
```

5. Probar Swagger en el navegador:
```
http://localhost:3000/api
```

## 🔑 Endpoint de prueba (Login)

POST /auth/login

Body de ejemplo:
```
{
  "username": "admin",
  "password": "1234"
}
```

Respuesta esperada:
{
  "access_token": "fake-jwt-token",
  "user": { "username": "admin" }
}

# Opcional (si vas a generar nuevos módulos/controladores)
```bash
npm i -g @nestjs/cli
```

## 🐳 Levantar con Docker (opcional)
```
docker-compose up --build
```

- Backend disponible en http://localhost:3000
- PostgreSQL disponible en el puerto 5432

## 🛠 Comandos útiles de NestJS
```
Generar módulo: nest g mo <nombre>
Generar controlador: nest g co <nombre>
Generar servicio: nest g s <nombre>
Generar guard: nest g gu <nombre>
Generar middleware: nest g mi <nombre>
Generar interceptor: nest g in <nombre>
Generar pipe: nest g pi <nombre>
```

## ⚙️ Configuración recomendada de VS Code

Agregar en `settings.json`:
```
"files.eol": "\n",
"editor.formatOnSave": true,
"editor.codeActionsOnSave": { "source.fixAll.eslint": true }
```

Normalizar archivos existentes:
```bash
npx prettier --write .
```

## 🌳 Flujo Git recomendado

- main: código estable
- develop: integración de features
- feature/*: nuevas funcionalidades

Cada PR debe apuntar a develop y ser revisado antes de mergear a main.
