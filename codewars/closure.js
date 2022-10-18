// const makeLooper= (str,i=0)=>()=> str.substr(i++ % str.length,1 )

function makeLooper(str,i=-1){
    return ()=>{
        i = (i+1) % str.length
        return str[i]
    }
}


const abc = makeLooper('abc')

console.log(abc(),abc(),abc(),abc())
console.log(abc(),abc(),abc(),abc())