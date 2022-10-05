function stockList(b, c) {
    if (!b.length || c.length) return ''
    const b1 = b.map((ele) => {
        const arr = ele.split(' ');
        return { [arr[0][0]]: arr[1] }
    })
    const ansArr = b1.reduce((a, b) => {
        if (Object.keys(a).indexOf(Object.keys(b)[0]) === -1) {
            a[Object.keys(b)] = parseInt(Object.values(b)[0])
        } else {
            a[Object.keys(b)] = parseInt(a[Object.keys(b)]) + parseInt(Object.values(b)[0])
        }
        return a
    }, {})
    let str = ''
    for (const x of c) {
        if (str === '') {
            str += ansArr[x] ? `(${x} : ${ansArr[x]})` : `(${x} : 0)`
        } else {
            str += ansArr[x] ? ` - (${x} : ${ansArr[x]})` : ` - (${x} : 0)`
        }
    }
    return str
}

// 網路上解法
// if (!listOfArt.length || !listOfCat.length) return ''
// return listOfCat.map(w => {
//   const s = listOfArt.reduce((a, b) => a + (b.charAt(0) === w ? +b.split(' ')[1] : 0), 0)
//   return `(${w} : ${s})`
// }).join(' - ')


b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B", "C", "D"]

console.log(stockList(b, c))