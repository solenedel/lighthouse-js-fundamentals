const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']; 

const finalPosition = function(moves){

let position = [0,0];

  for (const move of moves){

      if (move == 'north'){
      position[1] += 1;
    } else if (move == 'south'){
      position[1] -= 1;
    } else if (move == 'east') {
      position[0] += 1;
    } else {
      position[0] -= 1;
    }     

  }
  return position;
};



console.log(finalPosition(moves));