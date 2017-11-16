"""
multi-line
comment
"""
from time import sleep, strftime
USER_FIRST_NAME = "Rick"
calendar = {}
def welcome():
  print "Hello " + USER_FIRST_NAME + " & welcome!"
  print "The calendar is opening ..."
  sleep(1)
  print "Today is: " + strftime("%A, %B, %d, %Y")
  print "The current time is: " + strftime("%H %M, %S")
  sleep(1)
  print "What would you like to do?"
def start_calendar():
  welcome()
  start = True
  while start:
    user_choice = raw_input("A to Add, U to Update, V to View, D to Delete, X to Exit:")
    if user_choice == "V":
      if len(calendar.keys()) < 1:
        print "The calendar is empty."
      else:
        print calendar
    elif user_choice == "U":
      date = raw_input("What date? ")
      update = raw_input("Enter the update: ")
      calendar[date] = update
      print "The update was successful."
      print calendar
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
    elif user_choice == "X":
      start = False
    else:
      print "You have submitted an incorrect command."
      start = False
start_calendar()
      
            
            
            
          
        
      
        
        
        
      
      
      
  
  
  
  
  
