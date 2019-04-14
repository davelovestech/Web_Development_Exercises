# https://py3.codeskulptor.org/

# COMMENTS
# this is a comment!


# PRINT
print("Hello world!")

# SINGLE VS DOUBLE QUOTES ... ADD TRIPLE QUOTES
print('dave')
print("dave")

# RE-USING VARIABLES (PRE AND POST CHANGE)
# We've defined the variable "meal" here to the name of the food we ate for breakfast!
meal = "An english muffin"

# Printing out breakfast
print("Breakfast:")
print(meal)

# Now update meal to be lunch!
meal = "Lunch:"

# Printing out lunch
print("Lunch:")
print(meal)

# Now update "meal" to be dinner

# Printing out dinner
print("Dinner:")
print(meal)

# SYNTAX ERROR
# print('This message has mismatched quote marks!")
# print(Abracadabra)

# NAME ERROR
# print(Abracadabra)
# Abracadabra = "hello"
# print(Abracadabra)

# int vs float
an_int = 2
a_float = 2.1
print(an_int + 3)

# math
print(573 - 74 + 1)
print(25 * 2)
print(10 / 5)
print(25 * 68 + 13 / 28)


# RE-USING VARIABLES AS NUMBERS PRE AND POST CHANGE
coffee_price = 1.50
number_of_coffees = 4

# Prints "6.0"
print(coffee_price * number_of_coffees)
# Prints "1.5"
print(coffee_price)
# Prints "4"
print(number_of_coffees)

# Updating the price
coffee_price = 2.00

# Prints "8.0"
print(coffee_price * number_of_coffees)
# Prints "2.0"
print(coffee_price)
# Prints "4"
print(number_of_coffees)

# EXPONENTS
# 2 to the 10th power, or 1024
print(2 ** 10)

# 8 squared, or 64
print(8 ** 2)

# 9 * 9 * 9, 9 cubed, or 729
print(9 ** 3)


# MODULO OPERATOR
# We can even perform fractional exponents
# 4 to the half power, or 2
print(4 ** 0.5)

# Prints 4 because 29 / 5 is 5 with a remainder of 4
print(29 % 5)

# Prints 2 because 32 / 3 is 10 with a remainder of 2
print(32 % 3)

# Modulo by 2 returns 0 for even numbers and 1 for odd numbers
# Prints 0
print(44 % 2)

# CONCATENTATION
    # NO SPACE
    greeting_text = "Hey there!"
    question_text = "How are you doing?"
    full_text = greeting_text + question_text

    # Prints "Hey there!How are you doing?"
print(full_text)
    # HAS SPACE
    full_text = greeting_text + " " + question_text

    # Prints "Hey there! How are you doing?"
    print(full_text)

    # convert int to str
    birthday_string = "I am "
    age = 10
    birthday_string_2 = " years old today!"

    # Concatenating an integer with strings is possible if we turn the integer into a string first
    full_birthday_string = birthday_string + str(age) + birthday_string_2

    # Prints "I am 10 years old today!"
    print(full_birthday_string)

# PLUS EQUALS SKIP THIS
# First we have a variable with a number saved
number_of_miles_hiked = 12

# Then we need to update that variable
# Let's say we hike another two miles today
number_of_miles_hiked += 2

# The new value is the old value
# Plus the number after the plus-equals
print(number_of_miles_hiked)
# Prints 14

# MULTI-LINE STRINGS SKIP THIS
leaves_of_grass = """
Poets to come! orators, singers, musicians to come!
Not to-day is to justify me and answer what I am for,
But you, a new brood, native, athletic, continental, greater than
  before known,
Arouse! for you must justify me.
"""


























a
