let rawArgs = process.argv.slice(2);
let args = [];

rawArgs.forEach(val => {
    let commaSep = val.split(',');
    commaSep.forEach(val => {
        if(val !== '') args.push(+val);
    });
});

//console.log(args);
let avg = (...arr) => {
    return arr.reduce((result,elem) => result + elem)/arr.length;
}

console.log(avg(...args));
