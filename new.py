# Python Calculator that accepts all variables

# Function to add two numbers
def add(x, y):
    return x + y

# Function to subtract two numbers
def subtract(x, y):
    return x - y

# Function to multiply two numbers
def multiply(x, y):
    return x * y

# Function to divide two numbers
def divide(x, y):
    if y == 0:
        return "Error! Division by zero."
    else:
        return x / y

# Main program
while True:
    # Take input from the user
    try:
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))
    except ValueError:
        print("Please enter a valid number.")
        continue

    print("Operation - Enter the corresponding number:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")

    # Take input from the user for operation
    choice = input("Enter choice (1/2/3/4): ")

    # Check if choice is one of the four options
    if choice in ('1', '2', '3', '4'):
        if choice == '1':
            print("Result: ", add(num1, num2))

        elif choice == '2':
            print("Result: ", subtract(num1, num2))

        elif choice == '3':
            print("Result: ", multiply(num1, num2))

        elif choice == '4':
            print("Result: ", divide(num1, num2))
    else:
        print("Invalid Input")

    # Ask the user if they want to perform another calculation
    next_calculation = input("Would you like to do another calculation? (yes/no): ")
    if next_calculation.lower() != 'yes':
        break