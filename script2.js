///////////////////////////////////////////////////------------1 chunk
const arr3 = ['a', 'b', 'c', 'd'];

const chunk = (arr, a) => {
    const result = [];
    const res1 = arr.slice(0, a);
    const res2 = arr.slice(a);
    result.push(res1, res2);
    return result
}

console.log(chunk(arr3, 2))

////////////////////////////////////////////////////------------2 initial

const arr4 = [1, 2, 3];

const initial = (arr) => {
    let result = [];
    result = arr.slice(0, arr.length - 1);
    return result
}

console.log(initial(arr4))