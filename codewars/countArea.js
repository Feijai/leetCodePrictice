// 不知道為什麼會錯我不懂
const areaCount = (x) => {
    if (typeof x === 'number') {
        return x * x * 3.14
    } else {
        return x[0] * x[1]
    }
}

function sortByArea(array) {
    if (!array.length) return array
    return array.sort((a, b) => (areaCount(a) - areaCount(b)))
}



const array = [2.88, [9.64, 5.44], 4.15, [6.32, 9.35], 5.41, 7.19, 7.39]
const array2 = [
    [2.72, 0.92],
    [7.96, 3.59],
    [4.29, 8.03],
    [6.13, 7.42],
    4.09,
    [6.26, 9.61],
    [7.31, 9.54],
    5.74
]

console.log(sortByArea(array2))
console.log(sortByArea(array))
