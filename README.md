# dish_management_backend

Simple backend service for managing dishes (Node + Express + Prisma + Socket.IO).

## Requirements

- Node.js (>=16)
- A Postgres (or supported) database for Prisma. Provide the connection URL in a local `.env` file (not committed to git).

## Environment

Create a `.env` file at the project root with at least the following key:

```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
```

Other env keys may be required by your local setup (e.g., `PORT`). This repository does not include `.env` in git — make sure to create it locally before running the app.

## Install

Install dependencies:

```powershell
npm install
```

## Database (Prisma)

Generate Prisma client and run migrations as needed.

```powershell
npx prisma generate
npx prisma migrate dev --name init
```

If you only need to apply existing migrations to a database (e.g., a fresh DB), use:

```powershell
npx prisma migrate deploy
```

## Development

Start the dev server (uses `nodemon`):

```powershell
npm run dev
```

By default the server listens on `PORT` env var or `4000`.

## Build & Production

Build TypeScript to `dist`:

```powershell
npm run build
```

Start the built server:

```powershell
npm start
```

## Socket.IO notes

- The server broadcasts updates to connected clients when dish status is updated. Clients should connect to the server and listen for the `statusUpdated` event.

Example client listener:

```js
socket.on("statusUpdated", (data) => {
  console.log("Dish status updated", data);
});
```
