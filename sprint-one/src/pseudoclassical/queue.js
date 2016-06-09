var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.newestIndex = 1; 
  this.oldestIndex = 1; 
};

Queue.prototype.size = function() {
  return this.newestIndex - this.oldestIndex; 
};

Queue.prototype.enqueue = function(value) {
  this[this.newestIndex] = value; 
  this.newestIndex++; 
};

Queue.prototype.dequeue = function() {
  if (this.oldestIndex !== this.newestIndex) {
    this.result = this[this.oldestIndex]; 
    delete this[this.oldestIndex]; 
    this.oldestIndex++; 
    return this.result; 
  }
};

