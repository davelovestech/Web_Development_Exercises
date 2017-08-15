#This is a cute program that converts a user's input into Daffy Duck talk :D

#This prints out a request for a string for the program to convert.
#Saves the input into user_input and then converts it to downcase permanently w/ that exclamation point.
#I could accept either capitalization status, but that would take more lines of code to account for "S" instead of "s."
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
