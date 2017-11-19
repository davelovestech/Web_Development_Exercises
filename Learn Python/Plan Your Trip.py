"""
This Python program is called Plan Your Trip. You can use it to plan trips. The trip_cost call
can be any city within the plan_ride_cost function, the second parameter is the # of days of
a trip and the last parameter is the spending money for the trip. The program calculates the
total cost of the trip for the user. 
"""
def hotel_cost(nights):
  return 140 * nights

def plane_ride_cost(city):
  if city == "Charlotte":
    return 183
  elif city == "Tampa":
    return 220
  elif city == "Pittsburgh":
    return 222
  elif city == "Los Angeles":
    return 475

def rental_car_cost(days):
  cost = days * 40
  if days >= 7:
    cost -= 50
  elif days >= 3:
    cost -= 20
  return cost

def trip_cost(city, days, spending_money):
  return rental_car_cost(days) + hotel_cost(days) + plane_ride_cost(city) + spending_money

print trip_cost("Los Angeles", 5, 600)
