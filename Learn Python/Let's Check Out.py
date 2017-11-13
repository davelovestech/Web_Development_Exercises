#This program will calculate the total cost of
#buying 1 of items on a list, the shopping_list
shopping_list = ["banana", "orange", "apple"]
#Here's an inventory of the grocery store
#Note that items with 0 stock CANNOT be purchased
stock = {
  "banana": 6,
  "apple": 0,
  "orange": 32,
  "pear": 15
}
#Here are all of the prices for the items
prices = {
  "banana": 4,
  "apple": 2,
  "orange": 1.5,
  "pear": 3
}

#This function will take an argument of desired food
#and then return the total cost of purchasing each 
#item. A for loop is used to check for stock of
#the desired item AND then the stock of the store
#item is reduced by 1, because it was bought, and 
#the total cost of the shopping is added upon the prev
#total.
def compute_bill(food):
  total = 0
  for item in food:
    if stock[item] > 0:   
      total += prices[item]
      stock[item] = stock[item]-1
  return total
print compute_bill(shopping_list)
