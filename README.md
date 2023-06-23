# NestJS Module Federation Issues
- run `npm run start` to serve both host and remote application
- remote runs on `http://localhost:3001`
  - `http://localhost:3001/remote.js` is accessible
  - host runs on `http://localhost:3000` and attempts to load module from the remote on `http://localhost:3000/api` (apps\host\src\app\app.service.ts)