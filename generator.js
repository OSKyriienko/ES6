const max = process.argv[2];
let FizzBuzz = function*(){
  let curNumber = 1;
  let val = curNumber;
    while (curNumber <= max) {
        val = curNumber;
        if (!(curNumber % 3)) {
          val = 'Fizz';
        }
        if (!(curNumber % 5)) {
          val = 'Buzz';
        }
        if (!(curNumber % 15)) {
            val = 'FizzBuzz';
        }
        curNumber++;
        yield val;
    }
}();

for (let n of FizzBuzz) {
    console.log(n);
}