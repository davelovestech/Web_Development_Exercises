#This program takes a list of numbers and returns the median.
#Median is the middle position of a list of numbers. Recall 
#that an odd amount of numbers will have a middle #, BUT an
#even amount of numbers will have two middle numbers; in this 
#case the two middle numbers need to be averaged. 
#There are three different cases that this program considers:
#only one element, an even number of elements & an odd number 
#of elements. Only one element is easy; it is it's own median.
#An even number of elements is trickier ... half the length of 
#an even list is the right-most median number's index position. 
#See this example:
# (len(1, 2, 3, 4))/2 = 2
#index:0, 1, 2, 3; So index 2 corresponds to # 3. Getting the
#left-most even median is just subtracting the right-most 
#index position by 1. Then those two #s need to be added & 
#divided by 2. 
#An odd number of elements is also tough ... REALLY tough
#for me because I did it wrong on the first try, BUT the
#wrong way that I did it worked because of luck.
# (len(1, 2, 3, 4, 5))/2 = 2.5 rounding down gets index:
#index:0, 1, 2, 3, 4; Note that the correct index is 2.
#My error in the odd number code was to round up ... 
#I made the error on paper before coding. The reason
#That my code initially passed Codecademy's error test
#was because my half_length_of_list was set to 
#length_of_list / 2 INSTEAD of 2.0. That number was an
#int, so 2.0 rounded up was just 2, which is correct, LOL.

#I use math.ceil, so I need to import the math module. 
import math

def median(numbers):
  length_of_list = len(numbers)
  #Note the 2.0 INSTEAD of 2. This is necessary to have the
  #float for the math.floor method that the odd case needs. 
  half_length_of_list = length_of_list / 2.0
  half_length_of_list_minus_one = half_length_of_list - 1
  #It's essential to have a sorted list of numbers for indexes
  #to match the numbers they represent. 
  sorted_numbers = sorted(numbers)
  #Single element in list case
  if length_of_list == 1:
    print "The single element's median is itself: " + str(sorted_numbers)
    return numbers[0]
  #Even case has a length that is evenly divisible by 2
  elif length_of_list % 2 == 0:
    print "The even list of numbers is: " + str(sorted_numbers)
    #This is the right-most index for median
    upper_median = sorted_numbers[int(half_length_of_list)]
    print "Even upper_median is: " + str(upper_median)
    #This is the left-most index for median
    lower_median = sorted_numbers[int(half_length_of_list_minus_one)]
    print "Even lower_median is: " + str(lower_median)
    median = (upper_median + lower_median) / 2.0
    print "Even median is: " + str(median)
    return median
  #Odd case is already selected by not being single OR even.
  else:
    print "the odd list of numbers is: " + str(sorted_numbers)
    #See the intro for an explanation of why it's .floor instead of .ceil
    median_position = math.floor(half_length_of_list)
    print "Odd median_position is : " + str(median_position)
    median = sorted_numbers[int(median_position)]
    print "Odd median is: " + str(median)
    return median
