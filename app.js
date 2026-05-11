const express = require('express');
const app = express();

// Use port 8080 for OpenShift compatibility
const PORT = process.env.PORT || 8080;

// Middleware to parse JSON bodies (if you decide to POST later)
app.use(express.json());

// Health Check / Static REST Endpoint
app.get('/api/status', (req, res) => {
    res.status(200).json({
        status: "Healthy",
        framework: "Express.js",
        environment: "OpenShift S2I",
        uptime: process.uptime()
    });
});

// Root route for simple verification
app.get('/', (req, res) => {
    res.send('Node.js Express App is running on OpenShift!');
});

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});