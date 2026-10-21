
// without recursion
function fibs(n){
    if(n <= 0) return [];
    if(n === 1) return [0];

    const arr = [0, 1];

    for(let i=2;i<n;i++){
        let nextNumber = arr[i-1] + arr[i-2]
        arr.push(nextNumber);
    }

    return arr;
}


 //    same function with recursion
function fibsRec(n){
    console.log("This was printed recursively");
    if(n <= 0) return [];
    if(n === 1) return [0];
    if(n === 2) return [0, 1];

    const seq = fibsRec(n-1)
    seq.push(seq[seq.length-1]+seq[seq.length-2]);

    return seq;
}



console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(3));
console.log(fibsRec(6));
console.log(fibsRec(30));