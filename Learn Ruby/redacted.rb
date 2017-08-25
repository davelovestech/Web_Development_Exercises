=begin
This program is the solution to the "Redacted!" exercise from Unit 3 of 
the Learn Ruby course, which is part of the Codecademy Full Stack Web Developer Track. 
This program requests a string from the user AND a word from that string to redact.
It then returns the original string with the selected redaction word removed.
=end

#The "puts" command puts the request for text. gets.chomp stores the input in "text."
#The puts/gets.chomp cycle is used in the same fashion to get the word to redact.
puts "Text to search through: "
text = gets.chomp
puts "Word to redact: "
redact = gets.chomp

#"words" is a new variable that will now consist of an array of the text variable.
#The array is created by calling the split command on the text variable
#with " " (blank space) selected to be the splitter.
words = text.split(" ")

#The .each iterator will execute the code of the if/else statement for every
#array component of the words variable. The "word" within the pipes "|word|"
#doesn't need to be spelled the same as the "word" array because "|word|"
#is just a placeholder for the current array component ... it's like "i" in Javascript.
#The if statement checks if the current "|word|", from the array, *DOES NOT*
#match the "redact" variable (the redact condition.) If the word isn't the redact word,
#then the word will be printed with the print command with a space. The puts command would
#not work here because puts adds a new line. The else statement will print "REDACTED "
#whenever a word IS the word to redact (note the does not equal sign [!=].)
#Two "end" commands must be used because this program goes two layers deep 
#The (if/else) is one loop and the iterator is the next loop.
words.each do |word|
  if word != redact
    print word + " "
  else
    print "REDACTED "
  end
end
