function range(start, end, step){
  const array = [];

  if (start === undefined || end === undefined || step === undefined){
    return array;
  } else if (start > end){
    return array;
  } else if (step <= 0){
    return array;
  } else {
  
    array[0] = start;
  
    let i = 0;
    while (array[i] + step <= end){
      array.push(array[i] + step);
      i++;
    }
    return array; 
  }
}