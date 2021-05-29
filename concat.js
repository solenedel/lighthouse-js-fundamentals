function concat(array1, array2){
  let newArray = [];
  let i = 0;

  for (i = 0; i < array1.length; i++){
    newArray[i] = array1[i];
  }

  for (let j = 0; j < array2.length; j++){
    newArray[i + j] = array2[j];
  } 

  return newArray;
}

const concatenated = concat([], [ 9, 7, 2 ]);
console.log(concatenated);