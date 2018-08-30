// for (var num=1; num<101; num++){
//     if( num % 3 ===0 ) {
//         console.log("Fizz");
//     }
//     if (num % 5 === 0) {
//         console.log("Buzz")
//     }
//     console.log(num);
// }

// for (var num = 1; num <= 100; num++) {
//     if (num %3 ===0 && num % 5 ===0) {
//         console.log("FizzBuzz");
//     } else {
//         console.log(num);
//     }
// }

for (var num = 1; num <= 100; num++) {
    if (num % 3 ===0) {
        if (num % 5 ===0) {
            console.log("FizzBuzz");
        } else {
            console.log("Fizz");
        }
    } else if (num % 5 ===0) {
        console.log("Buzz");
    } else {
       console.log(num); 
    } 
}
  