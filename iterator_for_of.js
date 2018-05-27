const max = process.argv[2];
let FizzBuzz = {
    [Symbol.iterator]() {
        let curNumber = 0;
        return {
          next() {
              if (curNumber >= max) {
                  return { done: true };
              }
              curNumber++;
              if ((curNumber % 3 === 0) && (curNumber % 5 === 0)) {
                  return {done: false, value: 'FizzBuzz'};
              }
              if (curNumber % 3 === 0) {
                  return {done: false, value: 'Fizz'};
              }
              if (curNumber % 5 === 0) {
                  return {done: false, value: 'Buzz'};
              }
              else {
                  return {done: false, value: curNumber};
              }
          }
        }
    }
}

for (let n of FizzBuzz) {
    console.log(n);
}