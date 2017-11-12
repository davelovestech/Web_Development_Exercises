"""
This is a multi-line comment ... that's a
placeholder. from random import randint returns
an error message, so I needed to use from random
import *
"""
from random import *
from time import sleep

def get_user_guess():
  user_guess = int(raw_input("What is your guess?"))
  return user_guess
def roll_dice(number_of_sides):
  first_roll = randint(1, number_of_sides)
  second_roll = randint(1, number_of_sides)
  max_val = number_of_sides * 2
  print "The max die roll is: "  +str(max_val)
  sleep(1)
  user_guess = get_user_guess()
  if user_guess > max_val: 
    print "Your guess is higher than max"
    return
  else:
    print "Rolling..."
    sleep(2)
    print "The first value is: %d" % first_roll
    sleep(1)
    print "The second value is: %d" % second_roll
    sleep(1)
    total_roll = first_roll + second_roll
    print "The total roll is: %d" % total_roll
    print "Result ..."
    sleep(1)
    if user_guess > total_roll:
      print "You won!"
      return
    else:
      print "You lost, try again."
      return

roll_dice(20)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
