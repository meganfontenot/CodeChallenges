// in: sum and a product (two integers)
// output: array of two integers 
// hinge our perspective on the sum 
// iterate up through the whole sum until the sum = sum/2 
// determine if the current step * sum - current step = product 
// check to see if the current index times the sum - i = product 
// ^^ true: return [i, sum - 1]
// otherwise: return null 