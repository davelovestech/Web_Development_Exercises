=begin
This program is the solution to Unit 1 of the Learn Ruby course, which is part of the Codecademy Full Stack Web Developer Track. 
This program collects name & hometown information from the user with the gets.chomp command.
It corrects for improper capitalization usage by the user with the upcase and capitalize methods.
Print and puts are similar methods. Print does not add a new line. The difference between the two is that puts adds a new line AND does not list "nil" values. 
Both need string values in quotes. Chomp removes the enter character from the string's end. Gets would pick up the final enter without the chomp command ... 
it'd be listed as having "\n" in addition to the inputted text without the chomp. Capitalize and upper have similar results. 
Capitalize will capitalize only the first letter. Call this command by adding ".capitalize". The upcase method would capitalize the entered string ... 
that's what we do with the capitailze state part. Expressions inside of #{} are evaluate before being included in the string. 
That's how the final output is created.
=end

print "What's your first name? "
first_name = gets.chomp
first_name.capitalize!

print "What's your last name? "
last_name = gets.chomp
last_name.capitalize!

print "What city are you from? "
city = gets.chomp
city.capitalize!

print "What state or province are you from? "
state = gets.chomp
state.upcase!

puts "Your name is #{first_name} #{last_name} and you're from #{city}, #{state}!"
