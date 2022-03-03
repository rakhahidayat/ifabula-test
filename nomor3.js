function segitiga(x)
{
  let a = ''
  for(let i = 0; i<x; i++)
  {
    for(let j = 0; j<=i; j++)
    {
      a += '*'
    }
    if(i != x-1)
    {
       a+= '\n' 
    }
  }
  return a
}

console.log(segitiga(10))