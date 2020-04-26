// ES5 
for (var i = 1; i <= 10; i++) {
	(function(i){setTimeout(function() {
		// From looking at the code you would assume it would print 1 - 10
		// It doesn't.  Why?  How can you make it print 1 - 10.
		console.log(i);
	}, 0)})(i);
}


// ES6 
for (let i = 1; i <= 10; i++) {
	setTimeout(function() {
		// From looking at the code you would assume it would print 1 - 10
		console.log(i);
	}, 0);
}
