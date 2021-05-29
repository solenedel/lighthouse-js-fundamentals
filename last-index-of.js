// JavaScript has a .indexOf function (which does something similar), 
// but you may not use it in this exercise.

function lastIndexOf(array, value){
  
  for (let i = array.length; i >= 0; i--){
    // loop in reverse to get the last index
    if (array[i] === value){
      return i;
    } else if (!array.includes(value)){
      return -1;
    } else if (array === []){
      return -1;
    }
  }

}



const lastIndex = lastIndexOf([3], 3); // =3
console.log(lastIndex);