exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { num1, num2, operation } = JSON.parse(event.body);

    if (num1 === undefined || num2 === undefined || !operation) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Please provide both numbers and operation' })
      };
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Please enter valid numbers' })
      };
    }

    let result;
    let symbol;

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
          return {
            statusCode: 400,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: 'Cannot divide by zero!' })
          };
        }
        result = number1 / number2;
        symbol = '÷';
        break;
      default:
        return {
          statusCode: 400,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ error: 'Invalid operation' })
        };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        num1: number1,
        num2: number2,
        operation: operation,
        result: result,
        message: `${number1} ${symbol} ${number2} = ${result}`
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};
