"""
This program is called Factorial & it is part of the
Codecademy Learn Python track. The program is supposed 
to take in an integer, x, and return it's factorial. 
This code passed the Codecademy function testing, BUT
it looked wrong to me when I first thought it over. 
The factorial of 0 is supposed to be 1 AND I initally
thought this program would return 0 for a call of
factorial(0), BUT I neglected to realize that the
while loop that enacted won't run with 0 AND I 
made factorial equal to 1 before the while loop.
This code w/i the comments is functional, but I
have left it commented because I prefer the code
past it because it clearly takes the 0 input 
possibility into account.
def factorial(x):
  factorial = 1
  while x > 0:
    factorial = factorial * x
    x -= 1
  return factorial
You may recall that the factorial of 0 is supposed to 
be 1.
"""

def factorial(x):
  if x == 0:
    return 1
  factorial = 1
  while x > 0:
    factorial = factorial * x
    x -= 1
  return factorial
print(factorial(4))
