// Object destructuring 1
// 8
// 1846

// Object destructuring 2
// {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// Object destructuring 3
//Your name is Alejandro and you like purple
// Your name is Melissa and you like green
// Your name is undefined and you like green

// Array destructuring 1
// Maya
// Marisa
// Chi

// Array destructuring 2
// "Raindrops on roses"
// "whiskers on kittens"
// ["bright copper kettles", "warm woolen mittens", "brown paper packages tied up with strings"]

// Array destructuring 3
// [10, 30, 20]

//Refactoring

// assigning variables to object properties
const object = {
	numbers: {
		a: 1,
		b: 2
	}
};
const { a, b } = object.numbers;

// array swap
// let arr = [ 1, 2 ];

[ arr[0], arr[1] ] = [ arr[1], arr[0] ];

// raceResults

const raceResults = ([ first, second, third, ...rest ]) => ({ first, second, third, rest });
