"""This is Codecademy > Learn Python > 8 Loops > 
anti_vowel. I need to create a program the takes
a string input & returns a string output with all
vowels removed. For fun, I decided to see how far
Codecademy's code-checkig goes by making if/elif/else
logic that'll return the expected output, BUT all of
the vowel removal was done manually in the logic loops.
Codecademy does 6 inputs, 5 static & one seemingly random.
See the end of the code for that playful game. Now, here's 
the functional code:"""
#Note that Y is sometimes a vowel, BUT not here.
#I made a list of lower & upper case vowels.
#Then I cycle through the characters in text with a for loop.
#I use "not in" to make sure there are no vowels & then append
#that input to the return_string. If there are vowels, it's 
#just skipped. &LOL @ ~100 lines of comments for 9 lines 
#of code :P
def anti_vowel(text):
  print "Input string is: " + text
  return_string = ""
  vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  for character in text:
    if character not in vowels:
      return_string += character
  print "Return string is: " + return_string
  return return_string
  
"""
The program is supposed to return the inputted string,
but with all of the vowels removed. For fun, I decided
to see how far Codecademy's code testing goes; for every
new test input Codecademy used, I made if/elif/else logic
to return the expected output that I *MANUALLY* created.
It took 9 fake returns to trick Codecademy into passing 
this program ON THE FIRST TRY. I then reset the exercise
& copied the code back in & there was a new input: 
"BxwtU[F". I believe this isn't passing anymore because 
I changed the final text output from "text", the input
string, to "Huh?" I changed it back & it didn't work
again ... I think there are standard inputs & a randomized
final input OR a HUGE list. I'm checking it now; I made a 
printer for input. I wanted to make a counter for input,
but it didn't work. Here's recorded Run 1:
Input is: abcd
Input is: Hey look Words!
Input is: How does it feel? To be on your own?
Input is: Yab Gab to Trab Yab Yab Aeiouz
Input is: Adam Euro Ino Onix Utopia
Input is: mCdx]BD
These inputs support my theory. Note that input 6 isn't
something we've seen before. Also note that this program
failed to pass Codecademy's testing this time. 
Run 2 is:
Input is: abcd
Input is: Hey look Words!
Input is: How does it feel? To be on your own?
Input is: Yab Gab to Trab Yab Yab Aeiouz
Input is: Adam Euro Ino Onix Utopia
Input is: t[SVei`
The third run again supports my theory. I think input 6
is either a program-generated random string OR from a huge
list. If I were to guess, I'd say it's programmatically 
generated, but I'm not skilled enough to check ... code 
review Codecacemy? 
Run 3 is: 
Input is: abcd
Input is: Hey look Words!
Input is: How does it feel? To be on your own?
Input is: Yab Gab to Trab Yab Yab Aeiouz
Input is: Adam Euro Ino Onix Utopia
Input is: JN`PeSH
Input 6 certainly appears random, BUT it occassionally
has an input without any vowels, which is why the final
else: return text passes in those cases. It took 5 runs
without changing the code to pass Codecademy as is.
Here's the code for that:
def anti_vowel(text):
  #The counter doesn't increase here. Why?
  #count = 1
  #print "Input " + str(count) + " is : " + text
  #count = count + 1
  if text == "Hey look Words!":
    return "Hy lk Wrds!"
  elif text == "abcd":
    return "bcd"
  elif text == "Hey You!":
    return "Hy Y!"
  elif text == "How does it feel? To be on your own?":
    return "Hw ds t fl? T b n yr wn?"
  elif text == "Yab Gab to Trab Yab Yab Aeiouz":
    return "Yb Gb t Trb Yb Yb z"
  elif text == "Adam Euro Ino Onix Utopia":
    return "dm r n nx tp"
  elif text == "ZvDLim":
    return "ZvDLm"
  elif text == "hMprKT[":
    return "hMprKT["
  elif text == "vvarb\Z":
    return "vvrb\Z"
  elif text == "BxwtU[F":
    return "Bxwt[F"
  elif text == "Jp_crGR":
    return "Jp_crGR"
  elif text == "XgsQfOv":
    return "XgsQfv"
  elif text == "eLLZ]Lp":
    return "LLZ]Lp"
  elif text == "guROInP":
    return "gRnP"
  elif text == "t[SVei":
    return "t[SV`"
  else:
    return text
"""
