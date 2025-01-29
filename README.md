# Public API

## Description
This is a simple public API built with Node.js and Express. It returns a JSON response containing:


## Features
- Handles **CORS** (Cross-Origin Resource Sharing)
- Provides a JSON-formatted response
- Dynamically generates the **current UTC datetime**

## Installation
### Prerequisites
Ensure you have **Node.js** installed on your system.

### Setup Instructions
1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Run the Server**
   - Start in normal mode:
     ```sh
     npm start
     ```
   - Start in development mode (with auto-reload):
     ```sh
     npm run dev
     ```

## API Usage
### Endpoint
**GET /**

### Example Response
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

.

