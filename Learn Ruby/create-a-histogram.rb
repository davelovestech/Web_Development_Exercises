=begin
Create a Histogram is the concluding exercise for the Learn Ruby unit 4 track called "Arrays and Hashes."
This work is part of Codecademy's Full Stack Web Developer Program that I am working on.
This program asks the user for a text submission. It then returns a histogram of the 
number of times each word occurs in the text.
=end

#puts asks the user for the text and then gets.chomp saves the user's input for later usage.
puts "Text please: "
text = gets.chomp

#split is called upon the text variable and an array called "words" is created from everything between the spaces.
words = text.split(" ")

#A new hash called frequencies is created with a default value of "0". A hash is like an array, BUT
#instead of having an index of integers, a hash can have any object type ... in this case the words themselves are the object.
frequencies = Hash.new(0)

#The .each method is called upon the words array. "|word|" is the section of the "words" array that the .each loop is currently on.
#For the current "|word|", the frequencies hash, with a default of 0, gets +=1 (added 1.) Note that the .each loop of "word"
#is used for the hash addition and NOT the "words" array. Technically, the words array is being used, BUT the |word| from the .each loop 
#is actually what's plugged in to the frequencies hash. 
words.each { |word| frequencies[word] += 1 }

#Here, sort_by is called upon the frequencies hash with "a" as the key for comparison and "b" is the value. 
#This code sorts the frequencies by their values, so now the frequencies array will have a starting word with the lowest #.
#Note that I said frequencies is now an array, NOT a hash. That's because the sort_by method returns an array.
frequencies = frequencies.sort_by {|a, b| b }

#The exercise asks for the array to start with the most repetition and go down from there. 
#The sort_by method that we just used made the array have the lowest # of repetitions first.
#Here the .reverse method is used to make the highest # of repetitions first. 
#An exclamation point follows the .reverse call to change the frequencies array permanently. 
#We could have used frequencies = frequencies.reverse instead.
frequencies.reverse!

#Here the .each method is used to print out an ordered list. I've used puts instead of print to create a new line for each word.
#|word| is he current word of the frequencies array and |frequency| is it's index number. The .each method is used to 
#print each word, followed by a space and then the frequency. Note that I used the .to_s method to convert the frequency
#number into a string because the rest of the puts output is string. Without the to_s conversion, you'll throw an error.
frequencies.each { |word, frequency| puts word + " " + frequency.to_s }
