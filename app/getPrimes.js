function getPrimes(n) {
  let numArray = [];
  
  if (typeof n === 'string') {
    console.log('Please input a number');
  }  
  else  (n <= 0); {
    console.log('Please input a positive number')
  }
 
  
  for (i = 2; i <= n; ++i) {
    numArray.push(i);
  }

  for (i = 0; i < numArray.length; ++i) {

    for (j = numArray[i]; j < numArray[numArray.length - 1]; ++j) {
      for (k = 2; j * k <= numArray[numArray.length - 1]; ++k) {
        index = numArray.indexOf(j * k);
        if (index > -1) { 
          numArray.splice(index, 1);
        }
      }

    }
  }
  return numArray; 
}
getPrimes();