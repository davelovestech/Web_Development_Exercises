#This exercise is called count. The program I write
#needs to take two inputs: sequence & item.
#The program needs to return the # of times that item
#appears in sequence. 

#The working program uses a or loop to cycle through
#the sequence. Every time the item that needs to be 
#counted is found a counter is increased by 1

def count(sequence, item):
  number_of_item = 0
  print "The sequence is: " 
  print sequence
  print "The item I need to count is: " 
  print item
  for things in sequence:
    if things == item:
      number_of_item += 1
  print "The program has counted " + str(number_of_item)
  return number_of_item
