digits_to_letters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
}

def telephone_words(digits):
  letters = []
  
  def recurse(current, i):

    if len(current) == len(digits):
      letters.append(current)
      return

    current_letters = digits_to_letters[int(digits[i])]

    for l in current_letters:
      recurse(current + l, i + 1)
      
  recurse('', 0)
  return letters

telephone_words('2745')

//  SOLUTION  //
digits_to_letters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
}

def telephone_words(digits):
  results = []
  
 
