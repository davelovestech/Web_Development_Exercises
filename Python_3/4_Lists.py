# ADD A NEW HEIGHT TO THIS LIST
heights = [61, 70, 67, 64, 65]
# WHY DOES'[JT THIS WORK? FIX IT.]
#broken_heights = [65 71 59 62]

# LISTS CAN HAVE WHATEVER IN THEM
ints_and_strings = [1, 2, 3, 'four', 'five', 'six']
sam_height = ['Sam', 67]

# lists of LISTS
heights = [['Jenny', 61], ['Alexus', 70], ['Sam', 67], ['Grace', 64], ['Vik', 68]]
ages = [['Aaron', 15], ['Dhruti', 16]]

# add a new student and height as an exercise
# create a lists of lists brand new with ages and students

# USE ZIP TO CREATE A NEW LIST
names = ['Jenny', 'Alexus', 'Sam', 'Grace']
dogs_names = ['Elphonse', 'Dr. Doggy DDS', 'Carter', 'Ralph']
names_and_dogs_names = zip(names, dogs_names)
list_of_names_and_dogs_names = list(names_and_dogs_names)
print(list_of_names_and_dogs_names)

# EXERCISE OF POOLING NAME WITH EMAIL ADDRESS AND # NOTE:

# what would an empty list look like?
my_empty_list = []

# USE APPEND TO BUILD A LISTS
orders = ['daisies', 'periwinkle']
print(orders)
orders.append('tulips')
orders.append('roses')
print(orders)

# ADDING NEW ITEMS TO A LIST WITH +
orders = ['daisy', 'buttercup', 'snapdragon', 'gardenia', 'lily']

# Create new orders here:
new_orders = orders + ['lilac', 'iris']
print(new_orders)


broken_prices = [5, 3, 4, 5, 4] + [4]
print(broken_prices)


# RANGE MAKES RANGE OF numbers
list1 = range(9)
list2 = range(8)

# HOW WOULD YOU Make range up to but not including 10

# ranges can have starts at, difference of and ends at
list1 = range(5, 15, 3)
list2 = range(0, 40, 5)

# create list of lists gradebook
