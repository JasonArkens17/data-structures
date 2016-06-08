var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.index = 0;  

  _.extend(newStack, stackMethods);

  return newStack; 
};

// var extend = function(to, from) {
//   for(var key in from) {
//     to[key] = from[key];
//   }
// };

var stackMethods = {};


//push
stackMethods.push = function(value) {
  this.index++; 
  this[this.index] = value; 
};

//pop
stackMethods.pop = function() {
  var result = this[this.index];
  if (this.index > 0) { 
    delete this[this.index]; 
    this.index--;
    return result; 
  } 
};

//size
stackMethods.size = function() {
  return this.index; 
};


