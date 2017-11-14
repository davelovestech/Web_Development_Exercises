"""
This program will calculate a class average and letter-
grade for a collection of students. 
"""
#These dictionaries contain names, homeowrk, quizzes 
#& tests for the whole class.
lloyd = {
  "name": "Lloyd",
  "homework": [90.0, 97.0, 75.0, 92.0],
  "quizzes": [88.0, 40.0, 94.0],
  "tests": [75.0, 90.0]
}
alice = {
  "name": "Alice",
  "homework": [100.0, 92.0, 98.0, 100.0],
  "quizzes": [82.0, 83.0, 91.0],
  "tests": [89.0, 97.0]
}
tyler = {
  "name": "Tyler",
  "homework": [0.0, 87.0, 75.0, 22.0],
  "quizzes": [0.0, 75.0, 78.0],
  "tests": [100.0, 100.0]
}
#This function calculates the average for a list of #s.
#It sums up each # and divides by the total # of numbers.
def average(numbers):
  total = sum(numbers)
  total = float(total)
  return total/len(numbers)
#This function determines the average grade for a students.
#It must be called with a student as the parameter, so it
#can only run one student at a time. Weighting is used
#to power the grades by their importance.
def get_average(student):
  homework = average(student["homework"])
  quizzes = average(student["quizzes"])
  tests = average(student["tests"])
  return 0.1 * homework + 0.3 * quizzes + 0.6 * tests
#This function converts a score into a letter-grade
#with a series of logical selectors. 
def get_letter_grade(score):
  if score >= 90:
    return "A"
  elif score >=80:
    return "B"
  elif score >=70:
    return "C"
  elif score >=60:
    return "D"
  else:
    return "F"
#This program accepts a whole class as the parameter.
#A for loop is used to run the previous get_average
#function for the whole class. A "results" list is 
#appended with each new student average.
def get_class_average(class_list):
  results = []
  for student in class_list:
    student_avg = get_average(student)
    results.append(student_avg)
  return average(results)
#These are the three students in the class.
students = [lloyd, alice, tyler]
#Here I call the get_class_average function on the 
#whole students list. 
class_avg = get_class_average(students)
#Here, I print the class numerical & letter-grade averages.
print class_avg
print get_letter_grade(class_avg)
