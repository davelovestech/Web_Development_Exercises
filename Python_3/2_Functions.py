# FUNCTION INTRO
def sing_song():
  print("You may say I'm a dreamer")
  print("But I'm not the only one")
  print("I hope some day you'll join us")
  print("And the world will be as one")

# call sing_song() below:
sing_song()


# FUNCTION WITH ARGUMENT
def mult_two_add_three(number):

  print(number*2 + 3)

# Call mult_two_add_three() here:
mult_two_add_three(5)

# MULTIPLE PARAMETERS
def mult_x_add_y(number, x, y):
  print(number*x + y)

mult_x_add_y(5, 2, 3)
mult_x_add_y(1, 3, 1)

# calling functions to create variables
def calculate_age(current_year, birth_year):
  age = current_year - birth_year
  return age

my_age = calculate_age(2049, 1993)
dads_age = calculate_age(2049, 1953)
print("I am "+str(my_age)+" years old and my dad is "+str(dads_age)+" years old")


# returning multiple values
def square_point(x_value, y_value):
  x_2 = x_value * x_value
  y_2 = y_value * y_value
  return x_2, y_2

x_squared, y_squared = square_point(1, 3)
print(x_squared)
print(y_squared)

# SCOPE ISSUE ... CANNOT USE Vave learned:

    how to write a function
    how to give a function inputs
    how to return values from a functionARIABLE OUTSIDE OF SCOPE
# this will throw error unless defined universally
def create_special_string(special_item):
    return "Our special is " + special_item + "."

print("I don't like " + special_item)

# REPEAT STUFF FUNCTION
def repeat_stuff(stuff, num_repeats=10):
  return stuff*num_repeats

lyrics = repeat_stuff("Row ", 3) + "Your Boat. "
song = repeat_stuff(lyrics)

print(song)
