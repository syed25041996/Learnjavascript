const nums = [2, 4, 6, 8, -1, -2, -3]

const cube = nums.map(n => n * 3)

const cubeSum = nums.map(n => n * 3).reduce((a, b) => a + b, 0);

const cubePositiveSum = nums.map(n => n * 3).filter(n => n > 0).
    reduce((a, b) => a + b, 0);

console.log(cube);
console.log(cubeSum);
console.log(cubePositiveSum);
