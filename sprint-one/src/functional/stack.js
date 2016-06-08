var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0; 

  // Implement the methods below
  someInstance.push = function(value) {
    index++; 
    storage[index] = value;
  };

  someInstance.pop = function() {
    var value = storage[index]; 
    delete storage[index]; 
    if (index > 0) {
      index--; 
    }
    // index = Math.max(0, index - 1); 
    return value;
  };

  someInstance.size = function() {
    return index;
  };

  return someInstance;
};
