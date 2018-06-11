function bubbleSort (arr){
  //let count = 0;
  if (arr.length < 2){
    return arr;
  } else {
    for (let i = 0; i < arr.length; i++){
      if (arr[i] > arr[i+1]){
        arr = swap(arr, i);
        //countFunc(count);
      }
    }
  }
}

function swap(arr, i){

  let swapedNum;
    swapedNum = arr[i];
     arr[i]= arr[i+1];
    arr[i+1] = swapedNum;

  return arr;
}
// function countFunc(count) {
//   return count++;
// }

