def add_numbers(a, b):
    """Add two numbers and return the result."""
    return a + b


def subtract_numbers(a, b):
    """Subtract two numbers and return the result."""
    return a - b


def multiply_numbers(a, b):
    """Multiply two numbers and return the result."""
    return a * b


def divide_numbers(a, b):
    """Divide two numbers and return the result."""
    if b == 0:
        raise ValueError("Cannot divide by zero!")
    return a / b


def main():
    """Main function to run the calculator application."""
    print("=== 🎨 Kids Calculator Application ===\n")
    print("Choose an operation:")
    print("1. ➕ Addition")
    print("2. ➖ Subtraction")
    print("3. ✖️  Multiplication")
    print("4. ➗ Division\n")
    
    try:
        # Get operation choice
        operation = input("Enter your choice (1-4): ").strip()
        
        # Get first number from user
        num1 = float(input("Enter the first number: "))
        
        # Get second number from user
        num2 = float(input("Enter the second number: "))
        
        # Perform operation
        if operation == "1":
            result = add_numbers(num1, num2)
            symbol = "+"
        elif operation == "2":
            result = subtract_numbers(num1, num2)
            symbol = "-"
        elif operation == "3":
            result = multiply_numbers(num1, num2)
            symbol = "✖️"
        elif operation == "4":
            result = divide_numbers(num1, num2)
            symbol = "➗"
        else:
            print("Error: Invalid choice. Please enter a number between 1 and 4.")
            return
        
        # Display result
        print(f"\n🎉 {num1} {symbol} {num2} = {result}\n")
        
    except ValueError as e:
        print(f"Error: {e}")


if __name__ == "__main__":
    main()
