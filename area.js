function calculateRectangleArea(length, width){
  if (length < 0 || width < 0){
    return undefined;
  } else {
    return length * width;
  }
}

function calculateTriangleArea(base, height){
  if (base < 0 || height < 0){
    return undefined;
  } else {
  return (1 / 2) * (base) * (height);
  }
}

function calculateCircleArea(radius){
  if (radius < 0){
    return undefined;
  } else {
  return Math.PI * (radius **2);
  }
}

console.log(calculateCircleArea(-5));
