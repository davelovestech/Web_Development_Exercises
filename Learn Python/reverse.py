def reverse(text):
  reversed = ""
  length = len(text)
  counter = length - 1
  while counter >= 0:
    reversed = reversed + (text[counter])
    counter -= 1
  return reversed
