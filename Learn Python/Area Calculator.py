#This program is an area calculator.
#It asks the user to select from
#triangle, circle or square AND
#to share details about the shape.
#The program responds with the area.

#The three imports are needed for the
#rest of the program. Only pi is necessary
#BUT, it's nice to get this import practice.
from math import pi
from time import sleep
from datetime import datetime
#now stores the current date & time info.
now = datetime.now()
print "The calculator is starting up."
#The previ print statement is clear. This
#upcoming one uses string formatting to
#print the current date.
print '%s-%s-%s-%s-%s' % (now.month, now.day, now.year, now.hour, now.minute)
#Sleep is useless ... it makes the program 
#appear to think, but really it's just here
#for the import practice.
sleep(1)
#LOL, why is Codecademy pushing for us to use
#proper units and then not having a place for
#proper units ... it's complicated doe.
hint = "Don't forget to include the correct units! \nExiting..."
#Codecademy called for this C OR T for circle
#vs triangle, but I think it's more user friendly
#to allow for the whole word & it'd work the same
option = raw_input("Enter C for Circle or T for Triangle: ")
#upper standardizes input for the if/else
option = option.upper()
#If option is C, for circle, the user is prompted
#for the radius. 
if (option == 'C'):
  #float surrounds the request for radius, so
  #that the input can be converted from string
  #to float.
  radius = float(raw_input("What is the radius?"))
  area = pi * radius ** 2
  print "The pie is baking ..."
  sleep(1)
  #Here again we see string formatting, but this
  #time we also have floating point and only
  #two decimal points.
  print ("Area: %.2f. \n%s" % (area, hint))
#I couldn't get this program to work initially
#because elif wasn't indented appropriately. I
#had forgotten about the importance of indenting
#Python. This elif is conceptually identical to 
#the if, so read the comments above.
elif option == 'T':
    base = float(raw_input("What is the base length of the triangle?"))
    height = float(raw_input("What is the height of the triangle?"))
    area = 0.5 * base * height
    print("Uni Bi Tria...")
    print("Area: %.2f. \n%s" % (area, hint))
else: 
      print "I didn't understand your input."
#I liked this program! I also dig that Codecademy 
#has the bash on the right, so that I can call 
#the program myself ... that was kinda' a bummer
#initally when I was de-bugging & having to run 
#the code a lot, but I do like the push toward 
#running in the command prompt.
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  
  
