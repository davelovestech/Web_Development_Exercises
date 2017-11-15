"""
This program tests if a submitted entry is prime. 
Prime means that the number is only divisible by
1 and itself. As a reminder, all #s less than 2 
are not prime, so that'll return False right away.
Then I run the full range of 2 <-> x-1 with a modulo
== 0 to test for divisibility over the full range. 
It'll return False if there's a divisibility & True
if it's not divisible.
"""
def is_prime(x):
  if x < 2:
    return False
  else:
    for n in range(2, x-1):
      if x % n == 0:
        return False
    return True
