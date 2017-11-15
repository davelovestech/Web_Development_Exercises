#This program accepts a list of numbers & it returns
#a list that only has even numbers. A for loop is used
#to iterate through the input numbers list. If a number
#in the provided list is divisible by 2 without any 
#remainder, then that number is even. So, the modulo
#operator is used to find even numbers that are then
#appended to the new list for return.
def purify(numbers):
  purified_list = []
  for item in numbers:
    if item % 2 == 0:
      purified_list.append(item)
  return purified_list
