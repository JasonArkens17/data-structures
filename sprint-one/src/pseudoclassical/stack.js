var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.index = 0;

};


Stack.prototype.push = function(value) {
  this.index++;
  this[this.index] = value;
};

Stack.prototype.pop = function() {
  if (this.index > 0) {
    this.result = this[this.index]; 
    delete this[this.index]; 
    this.index--; 
    return this.result; 
  }
};

Stack.prototype.size = function() {
  return this.index;
};