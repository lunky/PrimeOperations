function primeFactorization(number, result) {
  var result = (result || {});
  var root = Math.sqrt(number);
  var x = 2;

  if (number % x!==0) {
    x = 3;
    while ((number % x) && ((x = (x + 2)) < root)) {}
  }

  x = (x <= root) ? x : number;

  if(x>1){
    result[x] = (result[x]||0)+1;
  }

  return (x === number) ? result : primeFactorization((number / x), result);
};

function sym(first,second){
  var unionOfKeys = [...new Set(Object.keys(first).concat(Object.keys(second)))]; 
  return unionOfKeys.map(k=>{
          return ({key: k, value: Math.abs((first[k]||0)-(second[k]||0))});
  });
}

function primeOperations(x,y){
  if(x==y){return 0;}
  a = primeFactorization(x)
  b = primeFactorization(y)
  var ops = sym(a,b);
  return ops.reduce((acc,x)=>acc+x.value,0);
}

module.exports = primeOperations ;
