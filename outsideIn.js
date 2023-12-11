// Given are two arrays inside and outside. Return true if all numbers present in inside array are also present in outside array.

function outsideIn(outside, inside) {
    let includesAll = true;
    inside.forEach((element, index, array) => {
    if (!outside.includes(element)) {
        includesAll = false;
    }
 })

 return includesAll;
}

console.log(outsideIn([1,2,3], [2,3]))