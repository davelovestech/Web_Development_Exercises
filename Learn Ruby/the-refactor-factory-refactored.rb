=begin
"The Refactor Factory" project is the concluding exercise for the Learn Ruby unit 7 track called "Refactoring."
This work is part of Codecademy's Full Stack Web Developer Program that I am working on.
This exercise provides you with poorly written Ruby code for a program that generates a list of prime numbers 
up to the entered ending number.
=end

$VERBOSE = nil    #This allows us to use the old-style Prime.new from Ruby 1.8. Prime.instance is the newly accepted command.
require 'prime'   #This pulls in the Ruby prime module.

#first_n_primes is our program name and it accepts the integer n, which it's called with at the end of the program.
def first_n_primes(n)
#is_a? Integer is used to check if the submitted number is an integer. An error is reported otherwise.
#The original code had a 3 line unless statement here that I've updated to be a single-line if statement.
return "n must be an integer." unless n.is_a? Integer

#Prime numbers are integers that are non-negative, so an error is thrown if a positive # isn't submitted.
#I've replaced the three line if statement from the initial version with this single-line if statement.
return "n must be greater than 0." if n <= 0

  #Here the variable prime_array is defined as an array if it hasn't already been defined to be something
  #See the original code, file with "initial" tagline instead of "refactored," for the inclusion
  #of the "if prime_array.nil?" Here I use the conditional assignment operator to simplify that code.
  prime_array ||= [] 
  #
  prime = Prime.new
  #There was an uncessary for loop here. I've replaced it with a simpler n.times.
  #.push can be simplified with the concatenation operator (<<).
  n.times {prime_array << (prime.next) }
  prime_array
  #There was a "return prime_array" that I removed. It wasn't necessary because the prime_array was just evaluated.
end

first_n_primes(10)
