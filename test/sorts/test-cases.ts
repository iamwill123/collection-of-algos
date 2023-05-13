const cases = {
	0: 'should return an object with the original array if length is 0 or 1',
	1: 'should sort an array of numbers in ascending order (by default) provided an object with a arr key with [] of values',
	2: 'should sort an array of numbers in descending order when provided a value of "desc" to the order prop',
	3: 'should sort an array of objects in ascending order (by default) when provided an arr key with an [] of {}s, and a key prop',
	4: 'should sort an array of objects in descending order when provided an arr key with an [] of {}s, a key prop, and value of "desc" to the order prop',
	5: 'should return the original array if isSorting is false',
	6: 'should call the callback with the current array and set animation to true',
	7: 'should not call the callback if not argument is provided and animation is false',
}

export { cases }
