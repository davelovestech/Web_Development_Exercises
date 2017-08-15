Here's a description of all the techniques that I needed to learn about for this program:
Print prints out the request for a string.
gets.chomp saves the string into a declared variable WITHOUT including the return command.
.downcase is called on the user's input w/ an exclamation point to permanently make the user's input lowercase. 
user_input.include? will return true, IF the string w/i the quotes that follows it is present in. This test is necessary because if the user's string doesn't have any "s" then they should be notified why no "th" appeared. 
gsub is a substiution method. The first string, "s" in our case gets replaced with the second string, "th" for this program. The fact that an exclamation point follows it creates a permanent change in the variable that it was called upon. 
Puts prints out the updated user input w/i a static string by using the #{} method that I learned about in the last section.
