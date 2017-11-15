#This program will accept a list of integers and then
#return the product of multiplying each item in the 
#list together. The product of the #s is set to = 1
#INSTEAD of 0 because multiplying that by anything
#would still = 0. A for loop is used to cycle through
#the provided #s and those #s are *= multiplied into
#the return string, which is called product_of_list.
def product(list_of_integers):
  product_of_list = 1
  for number in list_of_integers:
    product_of_list *= number
  return product_of_list
