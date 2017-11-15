#This program request is called scrabble_score. I need
#to create a program that takes an input of UPPER/lower
#case letters & determine the overall Scrabble point 
#score. Codecademy has provided a dictionary of points
#for lower case letters. This exercise seems easy @ 1st
#look. I need to convert the input to all the same case,
#use a for loop to cycle through characters, compare 
#those characters to each entry in the dictionary & sum
#each character's score for the ouput.

#LOLOL, sooooooo 30 minutes later, I finally have a 
#working program. I declared "score" as the variable to 
#store the users score in, BUT I didn't notice that score
#was the name of the dictionary :'( Not easy afterall
score = {"a": 1, "c": 3, "b": 3, "e": 1, "d": 2, "g": 2, 
         "f": 4, "i": 1, "h": 4, "k": 5, "j": 8, "m": 3, 
         "l": 1, "o": 1, "n": 1, "q": 10, "p": 3, "s": 1, 
         "r": 1, "u": 1, "t": 1, "w": 4, "v": 4, "y": 4, 
         "x": 8, "z": 10}
#The input word is translated to lowercase(to match the
#dictionary). I use a for loop to cycle through the input
#word, then I use a for loop to cycle through the dictionary.
#Next, an if checks for equivalence between the current 
#character of the input and the current key in dictionary.
#If the characters match, then I get the points from 
#dictionary by using score[key] and add that to the total.
def scrabble_score(word):
  print word
  word = word.lower()
  total = 0
  for character in word:
    for key in score:
      if character == key:
        total = total + score[key]
  print total
  return total
