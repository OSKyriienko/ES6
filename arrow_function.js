let inputs = process.argv.slice(2);
/*let result = inputs.map(function(elem) {
    return elem.slice(0,1);
})
    .reduce(function(sum,curElem) {
        return sum + elem;
    });
    */
let result = inputs.map( elem => elem.slice(0,1)).reduce((result,elem) => result + elem);
console.log(result);