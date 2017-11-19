"""
This Python program is called Number Guess and it is part of
the Codecademy Learn Python track. It can be found in the 4th
chapter on functions. This program uses simulated 
randomness to roll a pair of dice. The user is asked to guess
a number. If the user's guess is higher than the total of the
rolled dice, then the user wins. Otherwise, the user loses. 
"""
#This program needs randint from the random module to create
#a random number, so it's imported. It'd be simpler to only
#import the randint command, but this exercise is also about
#using import * to import an entire module. Additionally, 
#the sleep command is used to simulate the program thinking. 
from random import *
from time import sleep
#raw_input is used to ask the user for a guess. 
def get_user_guess():
  user_guess = int(raw_input("What is your guess?"))
  return user_guess
#randint is used to roll two 20 sided die. max_val is
#calculated by multiplying the number of sides by 2. The
#program uses number of sides instead of an established number
#to allow for a change in the number of sides easily at a 
#future date. 
def roll_dice(number_of_sides):
  first_roll = randint(1, number_of_sides)
  second_roll = randint(1, number_of_sides)
  max_val = number_of_sides * 2
  print "The max die roll is: "  +str(max_val)
  sleep(1)
  user_guess = get_user_guess()
  #This bit of logic checks to make sure that the users guess
  #is possible. Otherwise, the dice are rolled. String 
  #interpolation is used to print the value of the rolls. 
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
    #The rolls are summed and string interpolation is used
    #to print the total value of the rolls. If the user's guess
    #is higher than the total value of the rolls, than the
    #user wins. 
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
#Here the program is called. 
roll_dice(20)

#Ths program seems silly because the user could just always
#guess the max number. The program could be improved by 
#adding a raw_input to determine the total number of sides
#and the total number of die. 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
