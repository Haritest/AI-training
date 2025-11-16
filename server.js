const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Route to serve the HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint to handle math operations
app.post('/api/calculate', (req, res) => {
  const { num1, num2, operation } = req.body;

  // Validate input
  if (num1 === undefined || num2 === undefined || !operation) {
    return res.status(400).json({ error: 'Please provide both numbers and operation' });
  }

  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  // Check if inputs are valid numbers
  if (isNaN(number1) || isNaN(number2)) {
    return res.status(400).json({ error: 'Please enter valid numbers' });
  }

  let result;
  let symbol;

  // Perform operation based on selection
  switch (operation) {
    case 'add':
      result = number1 + number2;
      symbol = '+';
      break;
    case 'subtract':
      result = number1 - number2;
      symbol = '-';
      break;
    case 'multiply':
      result = number1 * number2;
      symbol = '×';
      break;
    case 'divide':
      if (number2 === 0) {
        return res.status(400).json({ error: 'Cannot divide by zero!' });
      }
      result = number1 / number2;
      symbol = '÷';
      break;
    default:
      return res.status(400).json({ error: 'Invalid operation' });
  }

  res.json({
    num1: number1,
    num2: number2,
    operation: operation,
    result: result,
    message: `${number1} ${symbol} ${number2} = ${result}`
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✓ Number Addition Frontend is running on http://localhost:${PORT}`);
  console.log(`✓ Open your browser and navigate to http://localhost:${PORT}`);
});
