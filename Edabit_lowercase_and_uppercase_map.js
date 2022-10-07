/*
Lowercase and Uppercase Map
Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.

Examples
mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }

mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }

mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }
Notes
All of the letters in the input list will always be lowercase.
*/

//this took me about fifteen seconds to write
function mapping(letters) {
	let mappedObj = {}
	letters.forEach(letter => {
		mappedObj[letter] = letter.toUpperCase()
	})
	return mappedObj
}

/*tests
Test.assertSimilar(mapping(["a", "b", "c"]), { a: "A", b: "B", c: "C" })
Test.assertSimilar(mapping(["p", "s", "t"]), { p: "P", s: "S", t: "T" })
Test.assertSimilar(mapping(["a", "v", "y", "z"]), { a: "A", v: "V", y: "Y", z: "Z" })
*/