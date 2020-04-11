def time_planner(a, b, dur):
	a_count, b_count = 0, 0
	
	while a_count < len(a) and b_count < len(b):
		start = max(a[a_count][0], b[b_count][0])
		end = min(a[a_count][1], b[b_count][1])
		
		if start + dur <= end:
			return (start, start + dur)
			
		if a[a_count][1] < b[b_count][1]:
			a_count += 1
		else:
			b_count += 1
			
	return None

//   SOLUTION    //

def time_planner(a, b, dur):
  a_count, b_count = 0, 0
  
  while a_count < len(a) and b_count < len(b):
    latest_start_need = max(a[a_count][0], b[b_count][0])
    earliest_end_need = min(a[a_count][1], b[b_count][1])
    
    if latest_start_need + dur <= earliest_end_need:
      return (latest_start_need, latest_start_need + dur)
    
    # If this time doesn't work because A's timeslot ends too soon,
    # check if A's next timeslot will work.
    # If this time doesn't work because B's timeslot ends too soon,
    # check if B's next timeslot will work.
    if a[a_count][1] < b[b_count][1]:
      a_count += 1
    else:
      b_count += 1
      
  return None
