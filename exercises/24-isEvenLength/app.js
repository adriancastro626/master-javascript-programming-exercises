// Write your function here

function isEvenLength(a){
    let count = a.length;

if (count % 2 == 0){
    return true
}
else {return false}
}

var output = isEvenLength('wow');
console.log(output); // --> falso