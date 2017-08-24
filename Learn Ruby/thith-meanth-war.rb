=begin
Thith Meanth War is the concluding exercise for the Learn Ruby unit 2 track called "Control Flow in Ruby."
This work is part of Codecademy's Full Stack Web Developer Program that I am working on.
Here's a description of all the techniques that I needed to learn about for this program: Print prints out the request for a string. 
gets.chomp saves the string into a declared variable WITHOUT including the return command. 
.downcase is called on the user's input w/ an exclamation point to permanently make the user's input lowercase. 
user_input.include? will return true, IF the string w/i the quotes that follows it is present in. 
This test is necessary because if the user's string doesn't have any "s" then they should be notified why no "th" appeared. 
gsub is a substiution method. The first string, "s" in our case gets replaced with the second string, "th" for this program. 
The fact that an exclamation point follows it creates a permanent change in the variable that it was called upon. 
Puts prints out the updated user input w/i a static string by using the #{} method that I learned about in the last section.
This is a cute program that converts a user's input into Daffy Duck talk :D
This prints out a request for a string for the program to convert.
Saves the input into user_input and then converts it to downcase permanently w/ that exclamation point.
I could accept either capitalization status, but that would take more lines of code to account for "S" instead of "s."
=end

print "Thtring, pleathe!: "
user_input = gets.chomp
#.downcase creates a lowercase version of user_input and permanently updates user_input because of the exclamation point.
user_input.downcase!

#This if/else makes sure that there are examples of "s" w/i the submitted string and will post an error message if there is no "s"
#gsub looks for the first string item, "s" in this case, and replaces it with what followed the comma, "th" in this case"
if user_input.include? "s"
  user_input.gsub!(/s/, "th")
else
  puts "Nothing to do here!"
end
  
#This is a regular puts command w/ A leading string explaning what you'll see and then the #{} inserts the updated user_input w/i the static string.
puts "Your string is: #{user_input}"
