"""
This program is called "digit_sum" and it is part of the
Learn Python track from Codecademy. The initial program
was only supposed to take a hard-coded number, n, & sum
all of n's digits. I converted the integer to a string
& then used a for loop to convert the character back to
an integer & then sum each individual character. Here's 
the code for that simpler part:
def digit_sum(n):
  total = 0
  string_n = str(n)
  for c in string_n:
    total = int(c) + total
  return total
BUT, Codecademy had listed an additional challenge to
use the modulo (%) AND floor division (//) to sum the 
digits. My first draft of that program was functional,
BUT this is a complicated request, so I wante to know
exactly what was going on. Here, I've used counters &
various print steps to show EXACTLY what is going on 
with each step of this program.
"""
def digit_sum(n):
  right_most_digit = []
  total = 0
  i = 0
  j = 0
  while n > 0:
    right_most_digit.append(n % 10)
    n = n // 10
    i = i + 1
    print "The while loop is on loop: " + str(i)
    print "right-most digit list is currently: " + str(right_most_digit)
    print "Input n is currently: " + str(n)
  for digit in right_most_digit:
    total = digit + total
    j = j + 1
    print "The for loop is on loop: " + str(j)
    print "The current digit is: " + str(digit)
    print "The total is currently: " + str(total)
  print "The sum of all the number's digits are: " +str(total)
n = int(raw_input("What number do you want to add the digits of? "))
digit_sum(n)  
