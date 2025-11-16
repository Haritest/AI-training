# Number Addition Application

A simple Python application that performs addition of two numbers with user input validation.

## How This Code Works

The application is built with the following components:

### 1. **`add_numbers(a, b)` Function**
   - Takes two numerical parameters (integers or floats)
   - Performs addition operation
   - Returns the sum of the two numbers

### 2. **`main()` Function**
   - Displays a welcome message
   - Prompts the user to enter the first number
   - Prompts the user to enter the second number
   - Calls `add_numbers()` to calculate the result
   - Displays the result in a formatted output
   - Includes error handling for invalid inputs

### 3. **Error Handling**
   - Catches `ValueError` exceptions when non-numeric input is provided
   - Displays a user-friendly error message

## Steps to Execute

### Prerequisites
- Python 3.x installed on your system
- Command prompt or terminal access

### Execution Steps

1. **Navigate to the project directory:**
   ```bash
   cd path/to/AI-training
   ```

2. **Run the application:**
   ```bash
   python addition_app.py
   ```

3. **Follow the prompts:**
   - Enter the first number when prompted
   - Enter the second number when prompted
   - View the result displayed on the screen

### Example Usage

```
=== Number Addition Application ===

Enter the first number: 10
Enter the second number: 25

10.0 + 25.0 = 35.0
```

### Error Handling Example

```
=== Number Addition Application ===

Enter the first number: abc
Error: Please enter valid numbers.
```

## Features

- ✅ Simple and user-friendly interface
- ✅ Supports both integer and floating-point numbers
- ✅ Input validation with error messages
- ✅ Clear formatted output

## Code Structure

```
addition_app.py
├── add_numbers(a, b)      # Core addition function
├── main()                  # Main application flow
└── Entry point            # Executes when script runs
```

---

# Node.js Frontend Setup

A modern web-based frontend for the number addition application built with Express.js and HTML/CSS/JavaScript.

## Installation & Setup

### Prerequisites
- **Node.js** (v14 or higher) - [Download from nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js)

### Step 1: Install Node.js
1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the installation wizard
4. Restart your terminal/PowerShell

### Step 2: Install Dependencies
Navigate to the project directory and install the required packages:

```bash
cd e:\AI-training
npm install
```

This will install:
- **Express.js**: Web framework for Node.js
- **body-parser**: Middleware for parsing request bodies

### Step 3: Start the Server
Run the server with:

```bash
npm start
```

You should see:
```
✓ Number Addition Frontend is running on http://localhost:3000
✓ Open your browser and navigate to http://localhost:3000
```

### Step 4: Access the Application
Open your web browser and navigate to:
```
http://localhost:3000
```

## Frontend Features

### User Interface
- 🎨 Modern gradient design with purple theme
- 📱 Responsive layout (works on desktop, tablet, mobile)
- ⚡ Smooth animations and transitions
- 🎯 Intuitive form with clear labels

### Functionality
- ✅ Input validation for both numbers
- ✅ Real-time error messages
- ✅ Loading indicator during calculation
- ✅ Display of detailed results (both inputs and sum)
- ✅ Automatic error clearing on input change

### File Structure
```
├── server.js              # Express server & API endpoint
├── public/
│   └── index.html         # Frontend HTML/CSS/JavaScript
├── package.json           # Node.js dependencies
└── addition_app.py        # Original Python CLI app
```

### API Endpoint

**POST** `/api/add`

Request body:
```json
{
  "num1": 10,
  "num2": 25
}
```

Response:
```json
{
  "num1": 10,
  "num2": 25,
  "result": 35,
  "message": "10 + 25 = 35"
}
```

## Troubleshooting

### Issue: "npm is not recognized"
- **Solution**: Ensure Node.js is installed and restart your terminal

### Issue: Port 3000 already in use
- **Solution**: Change the PORT variable in `server.js` to another port (e.g., 3001, 3002)

### Issue: Page won't load
- **Solution**: 
  1. Check the terminal for errors
  2. Verify the server is running
  3. Clear browser cache (Ctrl+Shift+Delete)