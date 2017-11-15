#This program will accept a list that contains duplicates.
#It returns a string without any duplicates. An empty
#list is created for non-duplicates to be copied over to.
#A for loop is used to cycle through the inputted list. 
#I use "not in" to check if the current item of the for
#loop is in the no_duplicates_list. Items that are not
#in the no_duplicates_list are added to the 
#no_duplicates_list
def remove_duplicates(list_with_duplicates):
  no_duplicates_list = []
  for item in list_with_duplicates:
    if item not in no_duplicates_list:
      no_duplicates_list.append(item)
  return no_duplicates_list
