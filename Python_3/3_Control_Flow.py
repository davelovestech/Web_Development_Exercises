# what do these work out to be? boring skip
# TRUE
(5 * 2) - 1 == 8 + 1
# FALSE
13 - 6 != (3 * 2) + 1
# TRUE
3 * (2 - 1) == 4 - 1

# true and false capitalization coutns
set_to_true = True
set_to_false = False

# TYPE OF
my_baby_bool = "true"

print(type(my_baby_bool))

my_baby_bool_two = True

print(type(my_baby_bool_two))

# SNEAKY LOGIC
if 2 == 4 - 2:
  print("apple")

# EXAMPLE OF IF LOGIC ... ADD CHANGING VARAIBLES
def dave_check(user_name):
  if user_name == "Dave":
    return "Get off my computer Dave!"
  if user_name == "angela_catlady_87":
    return "I know it is you Dave! Go away!"

# Enter a user name here, make sure to make it a string
user_name = "Dave"

print(dave_check(user_name))

# great example with work ... why pick You
#def greater_than(x, y):
  if x > y:
    return x
  if y > x:
    return y
  if x == y:
    return "These numbers are the same"

# CHANGE THIS TO PROMATCH HOURS
# ALSO ADD IN WHAT THEY'RE DOING FOR HOURS
def graduation_reqs(credits):
  if credits >= 120:
    return "You have enough credits to graduate!"

print(graduation_reqs(120))

# boring math ... replace this with promatch math
# (2 + 2 + 2 >= 6) and (-1 * -1 < 0)
statement_one = False
# (4 * 2 <= 8) and (7 - 1 == 6)
statement_two = True


# AQDING IN OR ... CHANGE THIS TO PROMATCH ... WHY THIS JOB?
def graduation_mailer(gpa, credits):
  if (gpa >= 2.0) or (credits >= 120):
    return True

# INTRODUCING NOT and more complicated LOGIC
def graduation_reqs(gpa, credits):
  if (gpa >= 2.0) and (credits >= 120):
    return "You meet the requirements to graduate!"
  if (gpa >= 2.0) and not (credits >= 120):
    return "You do not have enough credits to graduate."
  if not (gpa >= 2.0) and (credits >= 120):
    return "Your GPA is not high enough to graduate."
  if not (gpa >= 2.0) and not (credits >= 120):
    return "You do not meet either requirement to graduate!"

# ADDING IN ELSE (TO IF /ELSE)
def graduation_reqs(gpa, credits):
  if (gpa >= 2.0) and (credits >= 120):
    return "You meet the requirements to graduate!"
  if (gpa >= 2.0) and not (credits >= 120):
    return "You do not have enough credits to graduate."
  if not (gpa >= 2.0) and (credits >= 120):
    return "Your GPA is not high enough to graduate."
  else:
    return "You do not meet the GPA or the credit requirement for graduation."

# adding if/else statements elif
def grade_converter(gpa):
  grade = "F"

  if gpa >= 4.0:
    grade = "A"
  elif gpa >= 3.0:
    grade = "B"
  elif gpa >= 2.0:
    grade = "C"
  elif gpa >= 1.0:
    grade = "D"

  return grade


# RAISE, TRY AND EXCEPT INTRODUCED
def raises_value_error():
  raise ValueError

try:
  raises_value_error()
except ValueError:
  print("You raised a ValueError!")
