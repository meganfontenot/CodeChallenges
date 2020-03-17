// ES5 //
for (var i = 1; i <= 10; i++) {
	(function(i){setTimeout(function() {
		// From looking at the code you would assume it would print 1 - 10
		// It doesn't.  Why?  How can you make it print 1 - 10.
		console.log(i);
	}, 0)})(i);
}

/*  setTimeout with a argument of zero doesn't actually mean zero seconds of delay.
According to MDN it means "as soon as possible".  It is still a few milliseconds of delay.
So, the function waits for those few milliseconds and in the meantime the loop finishes
with the value of i ending up at 11.  When each of the functions finally run, i is 11.
So the code below works where the function gets a new scope each time through and each
time i is different.  Or you can just change var to let...
*/

// ES6 //
for (let i = 1; i <= 10; i++) {
	setTimeout(function() {
		// From looking at the code you would assume it would print 1 - 10
		// It doesn't.  Why?  How can you make it print 1 - 10.
		console.log(i);
	}, 0);
}
