//Разработать «чистую» функцию treeSum, которая получает массив, 
//элементы которого могут быть числами или снова массивами, и так до любого уровня.
const arr7 = [5, 7, [ 4, [2], 8, [1,3], 2 ], [ 9, [0] ], 1, 8];

const treeSum = (arr) => arr.flat(Infinity).reduce((sum, current) => sum + current, 0);

console.log(treeSum(arr7));