function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}


console.log(sumArray([3, 4, 5, 6, 7])); // Output: 18