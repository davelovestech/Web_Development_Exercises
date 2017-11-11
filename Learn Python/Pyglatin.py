#This program can do Pig Latin for a single 
#word. The variable pyg is the 'ay' ending.
pyg = 'ay'
#This asks the user for an entry.
original = raw_input('Enter a word:')
#This if/else block selects entries
#with legal characters to go through
#the if part. I don't think .isalpha()
#is the best choice for this selection;
#isalpha will return false for any ' '.
#It will return false for any spaces. 
if len(original) > 0 and original.isalpha():
#Ignore the two commented out print calls
#Those were there for initial testing.
    #print original
#The whole user entry is made lowercase
#to be easier to work with. The variable
#first is the first letter of the lower case
#user entry & new_word is the concatenation
#of the user entry, the first character &
#the 'ay' ending.
    word = original.lower()
    first = word[0]
    new_word = word + first + pyg
    #print new_word
#The very first character is sliced out
#to fit with the Pig Latin rules.
    new_word = new_word[1:len(new_word)]
    print new_word
else:
    print 'empty'
#I feel this exercise should be pushed
#back until the user has learned arrays.
#Pig Latin is a mult-word thing & it's not
#possible to do that w/o arrays. Call this exercise Pyglatin is LOL doe.
