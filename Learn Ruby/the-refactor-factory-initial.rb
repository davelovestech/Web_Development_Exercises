=begin
"The Refactor Factory" project is the concluding exercise for the Learn Ruby unit 7 track called "Refactoring."
This work is part of Codecademy's Full Stack Web Developer Program that I am working on.
This exercise provides you with poorly written Ruby code for a program that generates a list of prime numbers 
up to the entered ending number. I can't get this code to run on Codecademy (this is the provided code.)
I also couldn't get it to run on my desktop ... perhaps there's something about being unsupported that blocks it?
I tried running it with interactive Ruby and also through the Command Line without any suceess.
Nontheless, I'll still describe the changes and structure of this program in comparison to the refactored version.
=end

$VERBOSE = nil    #This allows us to use the old-style Prime.new from Ruby 1.8. Prime.instance is the newly accepted command.
require 'prime'   #This pulls in the Ruby prime module.

#first_n_primes is our program name and it accepts the integer n, which it's called with at the end of the program.
def first_n_primes(n)
#is_a? Integer is used to check if the submitted number is an integer. An error is reported otherwise.
#This three line unless statement can be simplified to one line with a single-line if statement. 
#See the refactored code for the simpler syntax.
  unless n.is_a? Integer
    return "n must be an integer."
  end
#Prime numbers are integers that are non-negative, so an error is thrown if a positive # isn't submitted.
#This is a three line if statement that can be converted into a single-line if statement.
#See the refactored version for the updated code.
  if n <= 0
    return "n must be greater than 0."
  end
  #Here the variable prime_array is defined as an array if it hasn't already been defined to be something.
  #this can be simplified with the conditional assignment operator, which you'll see in my refactored version.
  prime_array = [] if prime_array.nil?
  #
  prime = Prime.new
  #This for loop can be simplified with "n.times." See the refactored version for the update.
  for num in (1..n)
    #.push can be simplified with the concatenation operator (<<).
    prime_array.push(prime.next)
  end
  #This final return statement isn't necessary because "prime_array" was just evaluated, so "return" isn't necessary.
  return prime_array
end

first_n_primes(10)
