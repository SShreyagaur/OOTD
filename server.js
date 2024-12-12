const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API Endpoint for Top 10 Designs (example data)
app.get('/api/top-designs', (req, res) => {
    res.json([
        { id: 1, name: "Elegant Barbie Look" },
        { id: 2, name: "Ken's Casual Style" },
        { id: 3, name: "Modern Trendy Fit" },
        // Add more designs here
    ]);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
