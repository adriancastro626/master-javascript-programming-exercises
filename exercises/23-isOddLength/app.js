// Write your function here

function isOddLength(a){
    
    let count = a.length;

if (count % 2 !== 0){
    return true
}
else {return false}

}

var output = isOddLength('special');
console.log(output); // --> verdadero