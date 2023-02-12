///////////////////////////////////////////////////------------1 chunk
const arr3 = ['a', 'b', 'c', 'd'];

const chunk = (arr, size) => {
    let result = [];
    for(let i=0; i < arr.length; i += size) {
    let res1 = arr.slice(i, i + size);
    result.push(res1);
    }
    return result
}

console.log(chunk(arr3, 4))

////////////////////////////////////////////////////------------2 initial

const arr4 = [1, 2, 3];

const initial = (arr) => {
    let result = [];
    result = arr.slice(0, arr.length - 1);
    return result
}

console.log(initial(arr4))