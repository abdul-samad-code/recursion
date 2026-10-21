function merge(left , right){
    const result = []
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
          result.push(left[leftIndex]);
          leftIndex++;
          
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}

function mergeSort(array){
    if(array.length <= 1){
        return array;
    }
    const mid = Math.floor(array.length/2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);


    return merge(mergeSort(left), mergeSort(right));

}


console.log(mergeSort([]));
console.log(mergeSort([1]));
console.log(mergeSort([2,4,6,3,7,4,6,7,]));
console.log(mergeSort([66,232,656,5767,433,43,]));
console.log(mergeSort([9,5,3,6,76,24,5,5]));
console.log(mergeSort([54543,76,5,3,55]));
console.log(mergeSort([87,23,45,8723,3,4,2]));