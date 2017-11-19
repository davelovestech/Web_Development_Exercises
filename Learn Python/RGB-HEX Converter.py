"""
This Python program is called RGB-HEX Converter. It's tutorial
can be found at Codecademy in chapter 10: Advanced Topics in
Python. This program can convert RGB values to HEX and also 
HEX to RGB values.
"""
#rgb_hex uses raw_input to get RGB inputs for red, blue & also
#green. Logic statements are uses to limit inputs to within 0-
#255. Bitwise operators are used to print the HEX value of the
#input. 
def rgb_hex():
  invalid_msg = "ERROR! Your values are invalid."
  red = int(raw_input("Enter a value for red (R): "))
  if red < 0 or red > 255:
    print invalid_msg
    return
  green = int(raw_input("Enter a value for green (G): "))
  if green < 0 or green > 255:
    print invalid_msg
    return
  blue = int(raw_input("Enter a value for blue (B): "))
  if blue < 0 or blue > 255:
    print invalid_msg
    return
  val = (red << 16) + (green << 8) + blue
  print "%s" % (hex(val)[2:]).upper()
#This function translate hex into rgb. raw_input is used to ask
#the user for a hex_val. Bitwise operators are used to 
#translate the hex value into rgb. 
def hex_rgb():
  hex_val = raw_input("Enter a 6-digit hexadecimal value: ")
  if len(hex_val) != 6:
    print "There was an error in the value you entered."
    return
  else:
    hex_val = int(hex_val, 16)
  two_hex_digits = 2**8
  blue = hex_val % two_hex_digits
  hex_val = hex_val >> 8
  green = hex_val % two_hex_digits
  hex_val = hex_val >> 8
  red = hex_val % two_hex_digits
  print "Red: %s Green: %s Blue: %s" % (red, green, blue)
#A while loop is used to keep the function going. The user is 
#given the choice of converting from RGB to HEX OR converting 
#HEX into RGB AND also there's the option to quit. 
def convert():
  while True:
    option = raw_input("Enter 1 to convert RGB to HEX. Enter 2 to convert HEX to RGB. Enter X to Exit: ")
    if option == '1':
      print "RGB to HEX ..."
      rgb_hex()
    elif option == '2':
      print "HEX to RGB ..."
      hex_rgb()
    elif option == 'X' or 'x':
      break
    else:
      print "Error."
convert()
      
        
        
        
        
        
        
        
        
        
  
