import express from 'express';

import frontendRouter from './frontend.js';
import backendRouter from './backend.js';

const app = express();
const port = 3000;

// FRONTEND
app.use('/', frontendRouter);

// BACKEND
app.use('/api', backendRouter);

// ERROR HANDLING
app.use((err, req, res, next) => {
    res.status(400).json({
        error: err.message
    });
});




app.listen(port, () => {
    console.log(`App listening on http://localhost:${ port }`);
});