"""
This Python program is part of Codecademy's Learn Python track.
It can be found in Chapter 11: Introduction to Classes. The 
program creates a virtual bank. It allows for deposits, 
withdrawals, checking the balance, and showing the details of
the account. 
"""
#BankAccount is the one and only class for this project. It 
#defines balance as 0. There is an initializer for creating a
#bank acount based on an individuals name and has a starting
#balance of 0. 
class BankAccount(object):
  balance = 0
  def __init__(self, name):
    self.name = name
    #This uses string interpolation to print out the name
    #& total amount of money from an account. The print uses
    #floating point, two decimal place interpolation in the 
    #return. 
  def __repr__(self):
    return "%s's account. Balance: $%.2f" % (self.name, self.balance)
  #The show balance prints the balance. 
  def show_balance(self):
    print "(Balance: $%.2f)" % (self.balance)
  #deposit checks for >0 deposit numbers &, if it's acceptable,
  #will increment the total bank account balance by the deposit
  #amount. 
  def deposit(self, amount):
    if amount <= 0:
      print "You can't deposit zero or lower sums, silly."
      return
    else:
      print "You are depositing $%.2f" % (amount)
      self.balance += amount
      self.show_balance()
  #The withdraw function checks that you're asking for an 
  #amount of money that you actually have and then will 
  #decrement your account by the amount that you have 
  #withdrawn.
  def withdraw(self, amount):
    if amount > self.balance:
      print "You can't withdraw more money than you have."
      return
    else:
      print "You are withdrawing $%.2f" % (amount)
      self.balance -= amount
      self.show_balance()
#This creates the Rick Sanchez bank account. Then it does 
#several calls on the previously defined functions. 
my_account = BankAccount("Rick Sanchez")
print my_account
my_account.show_balance()
my_account.deposit(2000)
my_account.withdraw(1000)
print my_account

      
    
