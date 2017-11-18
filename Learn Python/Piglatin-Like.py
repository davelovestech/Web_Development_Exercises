def translator():
  print("\nWelcome to the Annakinese translator!")
  statement = input("\nWhat do you want to translate into Annakinese? ")
  insert_this = input("\nWhat goes after the syllables? ")
  translated = ""
  syllable = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y']
  for letter in statement:
    if letter in syllable:
      translated += letter
      translated += insert_this
    
    else:
      translated += letter
  print("---------------------------------------------------------------")
  print("\nThe statment you wanted to translate is: ")
  print(statement)
  print("\nThe thing that goes after syllables is: ")
  print(insert_this)
  print("\nYour statement translated into Annakinese is: ")
  print(translated)
translator()
