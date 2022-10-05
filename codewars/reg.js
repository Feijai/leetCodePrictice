const str = 'abcc 1212'
const reg = /([a-c]+)\s*(\d+)/g
console.log(str.replace(reg, ($0, $1, $2) => {
    return $2 + $1
}))

const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))