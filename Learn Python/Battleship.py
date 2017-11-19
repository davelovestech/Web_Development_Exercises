"""
This Python program is part of the Codecademy Learn Python
track. It is from Chapter 7: Lists and Functions. This program creates a 5X5 grid of the game Battleship. The user is allowed
four chances to guess the location of the battleship until the
game is over. 
"""
#This program makes uses of the randint function, so it needs
#to be imported. 
from random import randint

board = []
#A for loop is used to create a row grid of "O."
for x in range(0, 5):
  board.append(["O"] * 5)
#This prints a 5X5 grid, linking on each space. 
def print_board(board):
  for row in board:
    print " ".join(row)

print_board(board)
#These row and column functions create a random location for
#the battleship to be. 
def random_row(board):
  return randint(0, len(board) - 1)

def random_col(board):
  return randint(0, len(board[0]) - 1)

ship_row = random_row(board)
ship_col = random_col(board)
#print ship_row
#print ship_col

# Everything from here on should be in your for loop
# don't forget to properly indent!

#This runs 5 times. It prints the turn number and uses 
#raw_input to ask for locations to send he torpedos. 
for turn in range(4):
  print "Turn", turn + 1
  guess_row = int(raw_input("Guess Row: "))
  guess_col = int(raw_input("Guess Col: "))
#If you hit the battleship, you're alrerted of your win and
#the game is ended. Otherwise, IF your submission is outside
#of the game range, you're notified of your error. If you miss
#4 times in a row, then the game ends in a loss.
  if guess_row == ship_row and guess_col == ship_col:
    print "Congratulations! You sank my battleship!"   
    break
  else:
    if guess_row not in range(5) or \
      guess_col not in range(5):
      print "Oops, that's not even in the ocean."
    elif board[guess_row][guess_col] == "X":
      print( "You guessed that one already." )
    else:
      print "You missed my battleship!"
      board[guess_row][guess_col] = "X"
    if (turn == 3):
      print "Game Over"
    print_board(board)
