"""
This Python program is part of the Codecademy Learn Python.
It is from Chapter 9: Loops. The program creates a crude
calendar that the user can interact with by: viewing, adding
events, updating existing events and deleting established 
events. 
"""
#The program uses sleep, to make the user think that the
#program is thinking, and strftime, to create accurate date
#& time information. 
from time import sleep, strftime
#The user's name is defined as Rick Sanchez ;) & the calendar
#starts off as an empty dictionary. 
USER_FIRST_NAME = "Rick Sanchez"
calendar = {}
#This block welcomes the user and prints out the current day
#and time. 
def welcome():
  print "Hello " + USER_FIRST_NAME + " & welcome!"
  print "The calendar is opening ..."
  sleep(1)
  print "Today is: " + strftime("%A, %B, %d, %Y")
  print "The current time is: " + strftime("%H %M, %S")
  sleep(1)
  print "What would you like to do?"
#This program starts the while loop with a boolean of true. So
#long as that value is true, the function will continue to run. 
#That's accomplished with a while loop. 
def start_calendar():
  welcome()
  start = True
  while start:
    #A raw_input is used to prompt the user for what they want
    #to do.
    user_choice = raw_input("A to Add, U to Update, V to View, D to Delete, X to Exit:")
    #V is for view. It'll print the calendar IF there's stuff
    #in the calendar. 
    if user_choice == "V":
      if len(calendar.keys()) < 1:
        print "The calendar is empty."
      else:
        print calendar
    #U is for update. It uses raw_input to get the date of
    #addition and also it updates the calendar dictionary with
    #the new event. 
    elif user_choice == "U":
      date = raw_input("What date? ")
      update = raw_input("Enter the update: ")
      calendar[date] = update
      print "The update was successful."
      print calendar
    #A is for add. It adds a new event. raw_input is used to 
    #ask for the event and the date. This isn't a complex
    #calendar, so logic checks for the date addition to be
    #within the current calendar year. 
    elif user_choice == "A":
      event = raw_input("Enter event: ")
      date = raw_input("Enter date (MM/DD/YYYY): ")
      if (len(date) > 10 or int(date[6:]) < int(strftime("%Y"))):
        print "You have entered an invalid date."
        try_again = raw_input("Try Again? Y for Yes, N for No: ")
        try_again = try_again.upper()
      	if try_again == "Y":
        	continue
        else:
          start = False
      else:
        calendar[date] = event
        print "The update was successfull"
        print calendar
    #D is for delete. It deletes the event. 
    elif user_choice == "D":
      if len(calendar.keys()) < 1:
        print "The calendar is empty."
      else:
        event = raw_input("What event?")
        for date in calendar.keys():
          if event == calendar[date]:
            del calendar[date]
            print calendar
          else: 
            print "You have specified an incorrect date."
    #A user choice of upper or lower case ends the program.
    #The initial program only accepted uppercase X, so I added
    #lower case x. The program could be improved by converting
    #input like this into one case. 
    elif user_choice == "X" or 'x':
      start = False
    else:
      print "You have submitted an incorrect command."
      start = False
start_calendar()
      
            
            
            
          
        
      
        
        
        
      
      
      
  
  
  
  
  
