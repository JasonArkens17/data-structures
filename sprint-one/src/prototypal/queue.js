var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create object with Object.create pass in the methods 
  var newQueue = Object.create(queueMethods);
  newQueue.newestIndex = 1; 
  newQueue.oldestIndex = 1; 

  //return object 
  return newQueue;
};


var queueMethods = {};



//enqueue
queueMethods.enqueue = function(value) {
  this[this.newestIndex] = value; 
  this.newestIndex++; 
};

//dequeue
queueMethods.dequeue = function() {
  if (this.oldestIndex !== this.newestIndex) {
    var result = this[this.oldestIndex]; 
    delete this[this.oldestIndex];
    this.oldestIndex++; 
    return result; 
  }
}; 

//size
queueMethods.size = function() {
  return this.newestIndex - this.oldestIndex;
};

