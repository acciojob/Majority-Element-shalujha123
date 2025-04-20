//your code here
function majEle(arr,n){
	for(let i=0; i<=n-1; i++){
		if(arr[i] > Math.floor(n/2)){
			return arr[i]
		}
	}
}