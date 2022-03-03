var fibonacci = function (a) 
{
  if (a===1) {return [0, 1];} 
  else 
  {
    var b = fibonacci(a - 1);
    b.push(b[b.length - 1] + b[b.length - 2]);
    return b;
  }
};

 console.log(fibonacci(20));