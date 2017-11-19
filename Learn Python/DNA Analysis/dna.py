"""
This Python program is from Codecademy's Learn Python track. It
can be found in chapter 12: File Input and Output. It is a DNA
analysis program. There is a provided DNA sample and three
possible suspects that the sample came from. This program
compares the dna sample to DNA samples from 3 suspects. 
"""
#The provided DNA sample has three 3 character strings. See the
#suspect DNA for much longer strings. 
sample = ['GTA','GGG','CAC']
#read_dna accepts a dna file and uses for loop to add each
#line of the string to the dna_data string.
def read_dna(dna_file):
  dna_data = ""
  with open(dna_file, "r") as f:
    for line in f:
      dna_data += line
  return dna_data
#dna_codons accepts the read_dna dna_data string and breaks
#that up into 3 character long lists in an array.
def dna_codons(dna):
  codons = []
  for i in range(0, len(dna), 3):
    if (i + 3) < len(dna):
      codons.append(dna[i:i + 3])
  return codons
#match_dna counts the # of codon matches between the suspects
#and the sample. A for loop is used to loop through the DNA
#array. Every time there is a match of DNA array with the 
#DNA sample, a counter is bumped up 1. 
def match_dna(dna):
  matches = 0
  for codon in dna:
    if codon in sample:
      matches += 1
  return matches
#is_criminal uses all of the other functions to allow an input 
#of a .txt of the suspect DNA and counting of matches. Finally,
#it outputs the number of matches using string interpolation. 
def is_criminal(dna_sample):
  dna_data = read_dna(dna_sample)
  codons = dna_codons(dna_data)
  num_matches = match_dna(codons)
  if num_matches >= 3:
    print "# of codon matches: %s for %s. DNA profile matches. Continue investigation." % (num_matches, dna_sample)
  else:
    print "# of condon matches: %s for %s. DNA profile DOES NOT match." % (num_matches, dna_sample)
is_criminal('suspect1.txt')
is_criminal('suspect2.txt')
is_criminal('suspect3.txt')

  
    
  
  
