var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

//create new object to return

  var newQueue = {};

  _.extend(newQueue, queueMethods);
  newQueue.newestIndex = 1;
  newQueue.oldestIndex = 1;

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
  if (this.newestIndex !== this.oldestIndex) {
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

//index for queue object

