let arr = [2, 1, 2];
let n = arr.length;

function majEle(arr,n) {
  let freq = {}
  for(let t of arr){
    freq[t] = (freq[t] || 0) + 1
    if(freq[t] > Math.floor(n/2)){
      return t
    }
  }
}

console.log(majEle(arr,n));