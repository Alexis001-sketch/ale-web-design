def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def modulo(x, y):
    return x % y

def exponential(x, y):
    return x ** y

def floor_division(x, y):
    return x // y

def divide(x, y):
    if y != 0:
        return x / y
    else:
        return "Error! Division by zero."
        
def calculator():
        print("simple calculator that solves the arithmetic operator")
        print("Select operation:")
        print("1.Add")
        print("2.Subtract")
        print("3.Multiply")
        print("4.Modulo")
        print("5.Exponential")
        print("6.Floor_division")
        print("7.Division")

        while True:
            choice=input("Enter choice(1/2/3/4/5/6/7):")
            if choice in ('1', '2', '3', '4', '5', '6', '7'):
                num1=float(input("Enter first number: "))
                num2=float(input("Enter second number: "))
                if choice == '1':
                    print(f"{num1} + {num2} = {add(num1, num2)}")
                elif choice == '2':
                    print(f"{num1} - {num2} = {subtract(num1, num2)}")
                elif choice == '3':
                    print(f"{num1} * {num2} = {multiply(num1, num2)}")
                elif choice == '4':
                    result = modulo(num1, num2)
                    print(f"{num1} % {num2} = {result}")
                elif choice == '5':
                    import math
                    x = num1
                    y = num2
                    result = math.exp(x)
                    print(f"Euler's number raised to the power of {x} is approximately {result:.6f}")
                elif choice == '6':
                    result = floor_division(num1, num2)
                    print(f"{num1} // {num2} = {result}")
                elif choice == '7':
                     result = divide(num1, num2)
                     if result == "Error! Division by zero.":
                          print(result)
                     else:
                         print(f"{num1} / {num2} = {result}")

                next_calculation = input("Do you want to run another calculation?  (yes/no): ")
                if next_calculation.lower() != 'yes':
                     break
            else:
                print("Invalid Input")             
if __name__ == "__main__":
    calculator()