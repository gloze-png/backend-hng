// Import required modules
const express = require('express');
const cors = require('cors');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// API Route
app.get('/', (req, res) => {
    res.json({
        email: "gloryopeoluwa4@gmail.com", 
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/yourusername/your-repo"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
