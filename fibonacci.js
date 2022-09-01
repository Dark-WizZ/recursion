let input = 10

//Iteration

function fib(n){
  let res=[];
  for(let i=0; i<n; i++){
    if(i<2){
    	res.push(i);
      continue;
    }
    res.push(res[i-1]+res[i-2])
  }
  return res;
}

console.log('Iteration...')
console.log(fib(input))


//Recursion

let res=[];
let first = true;
function fibR(n){
  if(first){
    first = false;
    fibR(n-1);
    return res
  }
  if(n<2){
    res[n] = n;
    return n;
  }
  res[n] = fibR(n-1)+fibR(n-2)
  return res[n]
}

console.log('Recursion...')
console.log(fibR(input))