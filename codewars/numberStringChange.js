function fakeBin(x){
    const xs = x.split('');
    let ans = ''
    for (ele of xs){
        ans = parseInt(ele)>=5 ? ans+1 : ans+0
    }
    return ans

}

// 網路上解答
// return x.split('').map(n => n < 5 ? 0 : 1).join('');

console.log(fakeBin('45385593107843568'))