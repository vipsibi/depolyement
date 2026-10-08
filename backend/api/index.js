import { app, initializeApp } from '../server.js';

let databaseReady;

export default async function handler(request, response) {
    databaseReady ||= initializeApp();
    await databaseReady;
    return app(request, response);
}
