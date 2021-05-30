// We need to complete a function called smartGarbage(trash, bins), 
// which will be responsible for increasing the garbage count 
// for waste, recycling, or compost depending on what trash 
// is submitted.

function smartGarbage(trash, bins){
  
  if(trash === 'waste'){
    bins.waste ++;
  } else if(trash === 'recycling'){
    bins.recycling ++;
  } else {
    bins.compost ++;
  }

  return bins;
}


console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));