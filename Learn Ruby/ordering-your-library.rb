=begin
The "Ordering Your Library" project is the concluding exercise for the Learn Ruby unit 5 track called "Blocks and Sorting."
This work is part of Codecademy's Full Stack Web Developer Program that I am working on.
Ruby doesn't have a default way of sorting in reverse alphabetical order. This program takes the books array
and alphabetically organizes it A-Z and Z-A.
=end

#First, I define the alphabetize method as having two optional parameters. Note that "rev" has a default parameter of "false."
#Note that, if not value for "rev" is selected in the call (see the end of the program with the puts commands), the default is "false."
#See the if/else commands? "If rev" is shorthand for if rev=true. Rev is defaulted to flase and will stay so unless commanded otherwise.
#For rev=true, the .sort command is called and puts things in reverse alphabetical order. Note that |item1, item2| precedes item2 <=> item1.
#The else statement here will run *unless* the puts command inputs rev as true. The else statement will sort things A-Z.
#The reason the else statement does A-Z sorting is the order of "item1 <=> item2", which makes things lower in alphabet come first.
def alphabetize(arr, rev=false)
  if rev
    arr.sort { |item1, item2| item2 <=> item1 }
  else
    arr.sort { |item1, item2| item1 <=> item2 }
  end
end

#books is an array of books that we will soon alphabetically organize.
books = ["Heart of Darkness", "Code Complete", "The Lorax", "The Prophet", "Absalom, Absalom!"]

#This first puts command prints "A-Z: " and then uses #{the code inside this structure to call the alphabetize method to A-Z order the books}
#The second puts command is identical to the first, EXCEPT rev is stated to be true, so the main "if" statment will be run, which 
#outputs the array in Z-A order. 
puts "A-Z: #{alphabetize(books)}"
puts "Z-A: #{alphabetize(books, true)}"
