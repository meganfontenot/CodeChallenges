class TemperatureTracker:
  def __init__(self):
  	# For get_mode
  	self.occurrences = [0] * 141
  	self.max_occurances = 0
  	self.mode = None
  	
  	# For mean
  	self.number_of_readings = 0
  	self.total_sum = 0.0
  	self.mean = None
  	
  
  def insert(self, temp):
  	# for mode 
  	self.occurrences[temp] += 1
  	if self.occurrences[temp] > self.max_occurances:
  		self.mode = temp
  		self.max_occurances = self.occurrences[temp]
  		
  	# for mean
  	self.number_of_readings += 1
  	self.total_sum += temp
  	self.mean = self.total_sum / self.number_of_readings
  	
  	# For min and max
  	if temp > self.max_temp:
  		self.max_temp = temp
  	if temp < self.min_temp:
  		self.min_temp = temp

  def get_max(self):
  	return self.max_temp
  
  def get_min(self):
  	return self.min_temp
  
  def get_mean(self):
  	return self.mean
  
  def get_mode(self):
  	return self.mode
  	
//  SOLUTION  //
class TemperatureTracker:
  def __init__(self):
    # For mode 
    self.occurrences = [0] * 141   # list of all 0s at indices 0..140
    self.max_occurrences = 0
    self.mode = None
    
    # For mean 
    self.number_of_readings = 0 
    self.total_sum = 0.0 
    self.mean = None 
    
    # For min and max 
    # Set these initially to negative and positive infinity
    self.min_temp = float('inf')
    self.max_temp = float('-inf')
  
  def insert(self, temp):
    # For mode 
    self.occurrences[temp] += 1 
    if self.occurrences[temp] > self.max_occurrences:
      self.mode = temp 
      self.max_occurrences = self.occurrences[temp]
      
    # For mean 
    self.number_of_readings += 1 
    self.total_sum += temp 
    self.mean = self.total_sum / self.number_of_readings 

    # For min and max 
    if temp > self.max_temp:
      self.max_temp = temp 
    if temp < self.min_temp:
      self.min_temp = temp 
  
  def get_max(self):
    return self.max_temp 
  
  def get_min(self):
    return self.min_temp 
  
  def get_mean(self):
    return self.mean 
  
  def get_mode(self):
    return self.mode 
