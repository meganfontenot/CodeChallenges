def find_rotation_point(words):
  first_word = words[0]
  floor_index = 0
  ceiling_index = len(words) - 1

  while floor_index < ceiling_index:
    # Guess a point halfway between floor and ceiling
    guess_index = floor_index + ((ceiling_index - floor_index) // 2)
    # If the guess comes after the first word or is the first word
    if words[guess_index] >= first_word:
      # Go right
      floor_index = guess_index
    else:
      # Go left
      ceiling_index = guess_index
    # Check if our floor and ceiling indices have converged
    if floor_index + 1 == ceiling_index:
      return ceiling_index

//  SOLUTION  //
def find_rotation_point(words):
  first_word = words[0]
  floor_index = 0
  ceiling_index = len(words) - 1
  
  while floor_index < ceiling_index:
    # guess a point halfway between floor and ceiling
    guess_index = (ceiling_index + floor_index) // 2
    # if the guess comes after the first word or is the first word
    if words[guess_index] >= first_word:
      # go right
      floor_index = guess_index
      print("Going right --> ", floor_index)
    else:
      # go left
      ceiling_index = guess_index
      print("Going left --> ", ceiling_index)
    
    # check if floor and ceiling indices have converged
    if floor_index + 1 == ceiling_index:
      print("Done checking! --> ", ceiling_index)
      break
  
  return ceiling_index
  
print(find_rotation_point(['ptolemaic','retrograde','supplant','undulate','xenoepist', 'zoo', 'asymptote','babka','banoffee','engender','karpatka','othellolagkage']))
