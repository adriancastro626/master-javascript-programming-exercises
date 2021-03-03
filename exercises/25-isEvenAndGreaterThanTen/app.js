// Write your function here

function isEvenAndGreaterThanTen(a) {
    if (a % 2 == 0 && a > 10){
        return true
    }
    else { return false }
}
   

var output = isEvenAndGreaterThanTen(13);
console.log(output); // --> falso