function maxValue(arr: [number, ...number[]]): number {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i]! > max) max = arr[i]!;
    }

    return max;
}

console.log(maxValue([1, 33, 2, 1, 21, 8]));