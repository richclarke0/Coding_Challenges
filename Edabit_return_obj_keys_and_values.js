/*
Return the Objects Keys and Values
Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

Examples
keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]]
Notes
Remember to sort the keys.
*/

/* devs note
this one is kind of funny, it's meant to be easy and you can solve it with less code,
but you have to remember that objects arent always "in order" by key even if you write them in order
so i convert to an array and sort the array before pushing to the two sub arrays and returning the data
*/

function keysAndValues(obj) {
    let sortableArray = [];

    for (var key in obj) {
        sortableArray.push([key, obj[key]]);
    }

    sortableArray.sort(function (a, b) {
        return a[0] - b[0];
    });

    let [arr1, arr2] = [[], []]

    sortableArray.forEach(element => {
        arr1.push(element[0])
        arr2.push(element[1])
    })

    return [arr1, arr2]
}

/* tests
Test.assertSimilar(keysAndValues({a: 1, b: 2, c: 3}), [["a", "b", "c"], [1, 2, 3]])
Test.assertSimilar(keysAndValues({a: "Apple", b: "Microsoft", c: "Google"}), [["a", "b", "c"], ["Apple", "Microsoft", "Google"]])
Test.assertSimilar(keysAndValues({key1: true, key2: false, key3: undefined}), [["key1", "key2", "key3"], [true, false, undefined]])
Test.assertSimilar(keysAndValues({1: null, 2: null, 3: null}), [["1", "2", "3"], [null, null, null]])
Test.assertSimilar(keysAndValues({key1: "cat", key2: "dog", key3: null}), [["key1", "key2", "key3"], ["cat", "dog", null]])
*/