let arr = [11, true, "hmm", ['okay', 37, [false], 56], 89]

function tobeFlat(num) {
    return num.reduce((acc, val)=> Array.isArray(val) ? acc.concat(tobeFlat(val)) : acc.concat(val),[])
}
let result = tobeFlat(arr)
console.log(result);