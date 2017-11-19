"""This program is called Mad Libs. It is from the Codecademy
Learn Python track and can be found in chapter 2: Strings and Console Output. This program is a virtual edition of the 
Mad Libs game that children play.
"""
#First the user is asked for a series of entries that will 
#be plugged into the story at the end of the program. 
print "Mad Libs has started!"
name = raw_input('What is your name?')
first_adj = raw_input('Enter an adjedctive :')
second_adj = raw_input('Enter a second adjective: ')
third_adj = raw_input('Enter one more adjective :')
first_verb = raw_input('Enter a verb: ')
second_verb = raw_input('Enter a second verb: ')
third_verb = raw_input('Enter a third verb: ')
first_noun = raw_input('Enter a noun ')
second_noun = raw_input('Enter a 2nd noun ')
third_noun = raw_input('Enter a third noun ')
fourth_noun = raw_input('Enter a 4th noun ')
An_animal = raw_input('Enter an animal: ')
A_food = raw_input('Enter a food')
A_fruit = raw_input('Enter a fruit')
A_number = raw_input('Enter a number')
A_superhero_name = raw_input('Enter a superhero name')
A_country = raw_input('Enter a country')
A_dessert = raw_input('Enter a dessert')
A_year = raw_input('Enter a year')


#The template for the story
STORY = "This morning I woke up and felt %s because %s was going to finally %s over the big %s %s. On the other side of the %s were many %ss protesting to keep %s in stores. The crowd began to %s to the rythym of the %s, which made all of the %ss very %s. %s tried to %s into the sewers and found %s rats. Needing help, %s quickly called %s. %s appeared and saved %s by flying to %s and dropping %s into a puddle of %s. %s then fell asleep and woke up in the year %s, in a world where %ss ruled the world %s %s."

#Here string interpolation is used to print the story with
#all of the user-selected Mad Libs within it. 
print STORY % (first_adj, name, first_verb, second_adj, first_noun, second_noun, An_animal, A_food, second_verb, third_noun, A_fruit, third_adj, name, third_verb, A_fruit, third_adj, name, third_verb, A_number, name, A_superhero_name, A_superhero_name, name, A_dessert, name, A_year, fourth_noun)     
