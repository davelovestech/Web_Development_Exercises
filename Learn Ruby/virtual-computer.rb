=begin
The "Virtual Computer" project is the concluding exercise for the Learn Ruby unit 9 track called "Object-Oriented Programming, Part 1."
This work is part of Codecademy's Full Stack Web Developer Program that I am working on.
Learn Ruby unit 9 covers classes and objects in Ruby. This project calls upon that knowledge to create a class and generate 
instances of that class that manipulate files.
=end

#A class is the blueprint from which individual objects are created. 
#All the data members in the class are between the class definition and the end keyword.
#A class in Ruby always starts with the keyword class followed by the name of the class.
#Here I am creating the class "Machine." Classes must have an "end", which you'll see ~17 *CODE* lines from now.
#Capitalizing the first letter is a naming convention that should be followed.
class Machine
  #Class variables are available across different objects. 
  #A class variable belongs to the class and is a characteristic of a class. 
  #They are preceded by the sign @@ and are followed by the variable name. 
  @@users = {}
  
#Local variables are the variables that are defined in a method. 
#Local variables are not available outside the method. 
#Local variables begin with a lowercase letter or _.
#When you plan to declare the new method with parameters, you need to declare the method initialize at the time of the class creation.
#The initialize method is a special type of method, which will be executed when the new method of the class is called with parameters.
#In Ruby, functions are called methods. Each method in a class starts with the keyword def followed by the method name.
  def initialize(username, password)
    #Instance variables are available across methods for any particular instance or object. 
    #That means that instance variables change from object to object. 
    #Instance variables are preceded by the at sign (@) followed by the variable name. 
    #To tell instance variables from local variables, they have @ in front of their names.
    @username = username
    @password = password
    #This @@users class variable hash keeps usernames as keys with each username's password as the associated value.
    @@users[username] = password
    #curly brackets mean the creation of a new hash
    @files = {}
  end
  
  def create(filename)
    #Time objects represent moments in time. You can add (or subtract) numbers to (or from) times to get new times.
    #Time.now sets "time" to the current time
    time = Time.now
    #Add a new key/value pair to the @files hash. Use the filename key to store the value time.
    @files[filename] = time
    #This puts a message telling the user that a new file was created and prints the filename, the username, and the time.
    puts "#{filename} was created by #{@username} at #{time}."
  end

  #A class method belongs to the class itself, and for that reason, it's prefixed with the class name.
  def Machine.get_users
    @@users
  end
end

#You can create objects in Ruby by using the method new of the class.
#Here, I've created two new instances of Machine and stored them as new variables.
my_machine = Machine.new("eric", 01234)
your_machine = Machine.new("you", 56789)

#Here, I've used the Ruby "create" command to make files that correspond to the users "eric" and "you" from earlier.
my_machine.create("groceries.txt")
your_machine.create("todo.txt")

puts "Users: #{Machine.get_users}"
