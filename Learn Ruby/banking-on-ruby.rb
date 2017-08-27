=begin
The "Banking on Ruby" project is the concluding exercise for the Learn Ruby unit 10 track called "Object-Oriented Programming, Part II."
This work is part of Codecademy's Full Stack Web Developer Program that I am working on.
This exercise involves making an Account object with public methods to display balances and transfer funds, 
but which rely on private methods to make sure the user's PIN (personal identification number) is correct before approving transactions.
=end

class Account
    #With instance variables, you can make them accessible or not with attr_reader and attr_writer outside of the class.
    #The choice of attr_reader makes the :name & :balance attributes ONLY readable. The semicolon before the variable is a placeholder for the final variable.
    attr_reader :name, :balance
    #balance=100 is an optional parameter. If balance isn't provided, it's assumed to be 100.
    def initialize(name, balance=100)
      #@name & @balance are created as instance variables.
      @name = name
      @balance = balance
    end
    #This is the first public method. It takes pin number and responds with balance OR pin_error. Note the left side : right side either/or call syntax.
    def display_balance(pin_number)
      puts pin_number == pin ? "Balance: $#{@balance}." : pin_error
    end
    #This method allows us to withdraw from our account. It checks for correct pin# and allows a withdrawal IF the pin is correct. 
    def withdraw(pin_number, amount)
      if pin_number == pin
        #We need to use -= amount in the @balance line because @balance cannot be accessed outside of this class.
        @balance -= amount
        puts "Withdrew #{amount}. New balance: $#{@balance}."
      else
        puts pin_error
      end
    end
    
    #pin and pin_error are two private methods that cannot be accessed outside.
    #f you don't use public, you need to put your public methods before the private keyword, since private affects every method after it appears. 
    #If you put your public methods below private and don't label them public, they'll be private, too!
    private
    #pin is the pin # for any account that we create.
    def pin
      @pin = 1234
    end
    #pin_error gets called when an incorrect pin is used. For example, the 1st call of the my_account.withdraw method uses an incorrect pin.
    #The incorrect pin is 11 instead of 1234, so the error is displayed.
    def pin_error
      "Access denied: incorrect PIN."
    end
  end
  
  #We can use underscores in our 1_000_000 (one million). Ruby allows this, and it makes it easier to read big numbers!
  #my_account is a new instance of Account with name "Eric" and balance of 1,000,000.
  my_account = Account.new("Eric", 1_000_000)
  #ONLY the next single line of code should result in "Access denied: incorrect PIN."
  my_account.withdraw(11, 500_000)
  my_account.display_balance(1234)
  my_account.withdraw(1234, 500_000)
  my_account.display_balance(1234)
