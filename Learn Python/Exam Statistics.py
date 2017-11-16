grades = [100, 100, 90, 40, 80, 100, 85, 70, 90, 65, 90, 85, 50.5]

def print_grades(grades_input):
  for grade in grades_input:
    print grade

def grades_sum(scores):
  total = 0
  for score in scores: 
    total += score
  return total
    
def grades_average(grades_input):
  sum_of_grades = grades_sum(grades_input)
  average = sum_of_grades / float(len(grades_input))
  return average

def grades_variance(grades):
    variance = 0
    for number in grades:
        variance += (grades_average(grades) - number) ** 2
    return variance / len(grades)

def grades_std_deviation(variance):
  return variance ** 0.5

variance = grades_variance(grades)

for grade in grades:
  print grade
print grades_sum(grades)
print grades_average(grades)
print grades_variance(grades)
print grades_std_deviation(variance)
