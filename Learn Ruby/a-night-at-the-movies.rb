=begin
The "A Night at the Movies" project is the concluding exercise for the Learn Ruby unit 6 track called "Hashes and Symbols."
This work is part of Codecademy's Full Stack Web Developer Program that I am working on.
This program maintains a list of movies in a hash, with movie ratings, and allows for new movies to be added, current movies 
to be deleted, current movies to get updated ratings and for all movies in the hash to be displayed.
=end

#movies is a hash of all the movies in our database.
movies = {
  Memento: 3,
  Primer: 4,
  Ishtar: 1
}

#This puts (prints) all of the available options for the user to alter the database. Puts is better than print because of new lines.
puts "What would you like to do?"
puts "-- Type 'add' to add a movie."
puts "-- Type 'update' to update a movie."
puts "-- Type 'display' to display all movies."
puts "-- Type 'delete' to delete a movie."

#choice is a variable that gets the users input through gets.chomp. 
#.downcase is called upon the input to ensure simpler cases to be analyzed in the upcoming ruby case code.
choice = gets.chomp.downcase

#This Codecademy course introduced me to the "case" statement, which simplifies the mess of if/else statements I'd 
#otherwise need to create this program. The "case choice" hecks the user's inputted "choice" against
#the four available cases: add, update, display, delete. Within each case, if/else statements are used.
case choice
  
#'add' is the method for creating new movies in our hash. The user is asked what they want to add; it's saved w/ gets.chomp.
#The hash movies are stored as symbols in the hash. to_sym converts the user's submitted movie to a symbol, so
#it can be checked against the hash symbols. .nil? checks for falsehood (absence of title in the movies hash)
#it then asks for the rating in string format, which is converted to an integer with the "to_i" method. 
#If the movie is already present in the database, .nil? returns false, so the else message warns the user of their error.
when 'add'
  puts "What movie do you want to add?"
  title = gets.chomp
  if movies[title.to_sym].nil?
    puts "What's the rating? (Type a number 0 to 4.)"
    rating = gets.chomp
    movies[title.to_sym] = rating.to_i
    puts "#{title} has been added with a rating of #{rating}."
  else
    puts "That movie already exists! Its rating is #{movies[title.to_sym]}."
  end
  
#The update method operates very similarly to the add method, using .nil? and to_i to update the database.
when 'update'
  puts "What movie do you want to update?"
  title = gets.chomp
  if movies[title.to_sym].nil?
    puts "Movie not found!"
  else
    puts "What's the new rating? (Type a number 0 to 4.)"
    rating = gets.chomp
    movies[title.to_sym] = rating.to_i
    puts "#{title} has been updated with new rating of #{rating}."
  end
  
#The display method uses a do loop to print the whole set of hashes with |movie, rating|
#{the hashes are displayed with this hashtag curly brackets method that ruby allows :D}
when 'display'
  movies.each do |movie, rating|
    puts "#{movie}: #{rating}"
  end

#The delete method again uses the same gets.chomp, nil? and to_sym methods as previouslly described.
#The new command that's introduced here i the .delete, which is run on the user's title submission,
#which is converted to a hash symbol to work with the hash storage system, prior to the selected movie's deletion.
when 'delete'
  puts "What movie do you want to delete?"
  title = gets.chomp
  if movies[title.to_sym].nil?
    puts "Movie not found!"
  else
    movies.delete(title.to_sym)
    puts "#{title} has been removed."
  end

#This else is at the end of the case choice program that is above it. If the program cannot find a method for 
#what the user is asking, this error message is reported.
else
  puts "Sorry, I didn't understand you."
end
