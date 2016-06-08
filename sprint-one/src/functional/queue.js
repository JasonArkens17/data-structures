var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var newestIndex = 1;
  var oldestIndex = 1;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[newestIndex] = value; 
    newestIndex++;
  };

  someInstance.dequeue = function() {
    if (oldestIndex !== newestIndex) {
      var temp = storage[oldestIndex];
      delete storage[oldestIndex];
      oldestIndex++; 
      return temp;
    }

    // for (var i = 1; i < index; i++) {
    //   storage[i] = storage[i + 1];
    // }
  };

  someInstance.size = function() {
    return newestIndex - oldestIndex;
  };

  return someInstance;
};
