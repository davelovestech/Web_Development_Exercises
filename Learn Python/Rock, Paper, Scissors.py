"""
This program creats a Rock, Paper Scissors game for the user
to play against the computer. The only possible choices are
the traditional Rock, Paper & Scissors. 
"""
#Here are imports for methods I'll need later.
from random import randint
from time import sleep
#I'll be using the options list forc comparing choices.
#It's nice to have win/lose messages prepared in advance.
options = ["R", "P", "S"]
LOSS_MESSAGE = "You lost!"
WIN_MESSAGE = "You won!"
#This function decides the user. I used an index to easily
#compare the computer and user choices to determine the winner.
#Additionally, it's only possible to chose numbers 2 or below.
#If users could input their # index choice, then they could
#sneak negative numbers in to this logic, but user choice is
#handled by a separate function.
def decide_winner(user_choice, computer_choice):
  print "Your choice was: %s" % (user_choice)
  print "The computer chose: %s" % (computer_choice)
  user_choice_index = options.index(user_choice)
  computer_choice_index = options.index(computer_choice)

  if user_choice_index == computer_choice_index:
    print "It was a tie!"
  elif  user_choice_index == 0 and computer_choice_index == 2:
    print WIN_MESSAGE
  elif  user_choice_index == 1 and computer_choice_index == 0:
    print WIN_MESSAGE   
  elif  user_choice_index == 2 and computer_choice_index == 1:
    print WIN_MESSAGE  
  elif user_choice_index > 2:
    print "You have made an impossible choice."
  else: 
    print LOSS_MESSAGE
#The computer's choice is selected with the randint method.
#It's only possible for the computer to get an index between 
#0 and the length of the potential choices in the list. 
def play_RPS():
  print "Rock, Paper, or Scissors?"
  user_choice = raw_input("Select R for Rock, P for Paer, or S for Scissors: ")
  user_choice = user_choice.upper()
  sleep(1)
  computer_choice = options[randint(0, len(options)-1)]
  decide_winner(user_choice, computer_choice)
#This calls the program to run.   
play_RPS()
