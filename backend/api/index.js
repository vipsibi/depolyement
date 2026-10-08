import { app, initializeApp } from '../server.js';

let databaseReady;

export default async function handler(request, response) {
    try {
        databaseReady ||= initializeApp();
        await databaseReady;
        return app(request, response);
    } catch (error) {
        databaseReady = undefined;
        console.error('Backend initialization failed:', error);
        return response.status(503).json({
            message: 'Database connection failed',
            detail: error instanceof Error ? error.message : 'Unknown initialization error',
        });
    }
}
