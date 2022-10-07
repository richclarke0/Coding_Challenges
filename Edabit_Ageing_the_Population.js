//Edabit Ageing The Population
//https://edabit.com/challenge/xtDkfWxEh2hbmAHvn

// Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.

// Examples
// afterNYears({
//   "Joel" : 32,
//   "Fred" : 44,
//   "Reginald" : 65,
//   "Susan" : 33,
//   "Julian" : 13
// }, 1) ➞ {
//   "Joel" : 33,
//   "Fred" : 45,
//   "Reginald" : 66,
//   "Susan" : 34,
//   "Julian" : 14
// }

// afterNYears({
//   "Baby" : 2,
//   "Child" : 8,
//   "Teenager" : 15,
//   "Adult" : 25,
//   "Elderly" : 71
// }, 19) ➞ {
//   "Baby" : 21,
//   "Child" : 27,
//   "Teenager" : 34,
//   "Adult" : 44,
//   "Elderly" : 90
// }

// afterNYears({
//   "Genie" : 1000,
//   "Joe" : 40
// }, 5) ➞ {
//   "Genie" : 1005,
//   "Joe" : 45
// }
// Notes
// Assume that everyone is immortal (it would be a bit grim if I told you to remove names once they reached 75).
// n should be a positive number because last time I checked, people don't tend to age backwards. Therefore, use the absolute value of n.

function afterNYears(names, n) {
    for (let pers in names) {
        names[pers] = names[pers] + Math.abs(n)
    }
    return names
}

// Test.assertSimilar(afterNYears({
// 	"Joel" : 32,
// 	"Fred" : 44,
// 	"Reginald" : 65,
// 	"Susan" : 33,
// 	"Julian" : 13
// }, 1), {
// 	"Joel" : 33,
// 	"Fred" : 45,
// 	"Reginald" : 66,
// 	"Susan" : 34,
// 	"Julian" : 14
// })

// Test.assertSimilar(afterNYears({
// 	"Baby" : 2,
// 	"Child" : 8,
// 	"Teenager" : 15,
// 	"Adult" : 25,
// 	"Elderly" : 71
// }, 19), {
// 	"Baby" : 21,
// 	"Child" : 27,
// 	"Teenager" : 34,
// 	"Adult" : 44,
// 	"Elderly" : 90
// })

// Test.assertSimilar(afterNYears({
// 	"Genie" : 1000,
// 	"Joe" : 40
// }, 5), {
// 	"Genie" : 1005,
// 	"Joe" : 45
// })

// Test.assertSimilar(afterNYears({
// 	"Adam" : 0,
// 	"Eve" : 0
// }, 800), {
// 	"Adam" : 800,
// 	"Eve" : 800
// })

// Test.assertSimilar(afterNYears({
// 	"Ambitious Old Scientist" : 87,
// 	"Ambitious Scientist" : 42,
// 	"Slightly Concerned Young Scientist" : 23
// }, -35), {
// 	"Ambitious Old Scientist" : 122,
// 	"Ambitious Scientist" : 77,
// 	"Slightly Concerned Young Scientist" : 58
// })

// Test.assertSimilar(afterNYears({
// 	"USA" : 243,
// 	"Person" : 27
// }, 0), {
// 	"USA" : 243,
// 	"Person" : 27
// })

module.exports = { afterNYears }