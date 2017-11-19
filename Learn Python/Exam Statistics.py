"""
This Python program is called Exam Statistics. It is from
Codecademy's Learn Python track and is in Chapter 9: Exam
Statistics. This program has hardcoded values for exam grades
for a class. It calculate average, variance, sum, and standard
deviation for the whole class. Everything is printed at the 
end. 
"""
#This array holds all of the grades. 
grades = [100, 100, 90, 40, 80, 100, 85, 70, 90, 65, 90, 85, 50.5]
#Here a for loop is used to print out all of the grades.
def print_grades(grades_input):
  for grade in grades_input:
    print grade
#Here a for loop is used to sum all of the grades.
def grades_sum(scores):
  total = 0
  for score in scores: 
    total += score
  return total
#average grades are determined by dividing the sum of the 
#grades by the number of grades. 
def grades_average(grades_input):
  sum_of_grades = grades_sum(grades_input)
  average = sum_of_grades / float(len(grades_input))
  return average
#Variance is determined by subtracting the average of all the
#grades by the individual grade numbers, squaring and then
#dividing by the total number of grades. 
def grades_variance(grades):
    variance = 0
    for number in grades:
        variance += (grades_average(grades) - number) ** 2
    return variance / len(grades)
#Std deviation is the square root of variance.
def grades_std_deviation(variance):
  return variance ** 0.5

variance = grades_variance(grades)
#Here we print all of the grades:
print("The grades are: ")
for grade in grades:
  print grade
print("The grade sum is: ")
print grades_sum(grades)
print ("The grade average is: ")
print grades_average(grades)
print("The grade variance is: ")
print grades_variance(grades)
print("The grade standard deviation is: ")
print grades_std_deviation(variance)
