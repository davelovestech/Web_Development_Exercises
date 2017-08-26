=begin
"The Refactor Factory" project is the concluding exercise for the Learn Ruby unit 7 track called "Refactoring."
This work is part of Codecademy's Full Stack Web Developer Program that I am working on.
This exercise provides you with poorly written Ruby code for a program that generates a list of prime numbers 
up to the entered ending number. See the initial code (it has the same file name, except with the "initial.rb"
as the end of the file name instead of "refactored.rb" for more context.
=end

require 'prime'   #This pulls in the Ruby prime module.

#first_n_primes is our program name and it accepts the integer n, which it's called with at the end of the program.
def first_n_primes(n)
#is_a? Integer is used to check if the submitted number is an integer. An error is reported otherwise.
#The original code had a 3 line unless statement here that I've updated to be a single-line if statement.
"n must be an integer." unless n.is_a? Integer

#Prime numbers are integers that are non-negative, so an error is thrown if a positive # isn't submitted.
#I've replaced the three line if statement from the initial version with this single-line if statement.
"n must be greater than 0." if n <= 0

#Prime.new is obsolete. The updated code to use is Prime.instance. Prime.first n (or a # here) can be used
#to call for the first n instances of a prime #.
  prime = Prime.instance
  prime.first n 
end
  
#This code calls the first_n_primes that we defined earlier.
puts first_n_primes(10)
