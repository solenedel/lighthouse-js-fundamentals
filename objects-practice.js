/*
let umbrella = {
  color: "pink",
  isOpen: false,
  open: function(){

    if(umbrella.isOpen === true){
      return 'The umbrella is already open';
    } else {
      umbrella.isOpen = true;
      return 'Opened the umbrella!';
    }
    },

    close: function(){
      if(umbrella.isOpen === false){
        return 'The umbrella is already closed';
      } else {
        umbrella.isOpen = false;
        return 'closed the umbrella!';
      }
  }


};

console.log(umbrella.color); */

/* Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1 */

const facebookProfile = {
  name: 'Bob',
  friends: 567,
  messages: ['msg1', 'msg2', 'msg3'],

  //methods
  postMessage: function(message){
    this.messages.push(message);
    return this.messages;
  },

  deleteMessage: function(index){
    this.messages.splice(index, 1);
    return this.messages;
  },

  addFriend: function(){
    return this.friends ++;
  },

  removeFriend: function(){
    return this.friends --;
  }
};

//console.log(facebookProfile.deleteMessage(1));

/* SOLUTION WITHOUT USING THE THIS KEYWORD:

var facebookProfile = {
    name: "Udacian",
    friends: 25,
    messages: ["Message 1", "Message 2", "Message 3", "Message 4"],
    postMessage: function(message){
        facebookProfile.messages.push(message);
    },
    deleteMessage: function(index){
        // In the following splice() method call,
        // - argument 1 = index from where the element has to be deleted
        // - argument 2 = count of elements to be deleted
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function(){
        facebookProfile.friends = facebookProfile.friends + 1;
        //friends += 1; // this statement is equivalent to the above
    },
    removeFriend: function(){
        if(facebookProfile.friends>0)
            facebookProfile.friends = facebookProfile.friends - 1;
    }
}; */


var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

// this is an array of objects

donuts.forEach(function(donut){
  console.log(donut.type + ' donuts cost $' + donut.cost + ' each');
});
