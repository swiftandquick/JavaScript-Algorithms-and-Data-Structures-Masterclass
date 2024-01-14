class HashTable {
  // Set keyMap as an array with a certain length, if no size is passed in, the length is 53.
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  // Hash a key into a numerical value.
  // The prime number in the hash is helpful in spreading out the keys more uniformly.
  // It's also helpful if the array that I am putting values into has a prime length.
  // If the key length is greater than 100, only hash based on the first 100 characters.
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  // The index is total returned from _hash() after the key is hashed.
  // If there's nothing in the specified index of keyMap array yet, set that index's value to an empty array.
  // Check if the key is duplicate, if it's not push the key-value pair into the index's array.
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    let duplicate = false;
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        duplicate = true;
      }
    }
    if (!duplicate) {
      this.keyMap[index].push([key, value]);
    }
  }
  // The index is total returned from _hash() after the key is hashed.
  // If index in keyMap is found, iterate over the array in that index.
  // If the key (at index 0) is found in the keyMap[index] array, return the value (at index 1) of the key-value pair.
  // If index in keyMap is not found, return undefined.
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  // Iterate over the nested arrays, add each key-value pair's (inner array) key into the array.
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keysArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keysArr;
  }
  // Iterate over the nested arrays, add each key-value pair's (inner array) value into the array.
  // Duplicated values are not added.
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

// Create a HashTable object called hashTable, set size equals 17.
let hashTable = new HashTable(17);

hashTable.set("maroon", "#800000");
hashTable.set("yellow", "#FFFF00");
hashTable.set("olive", "#808000");
hashTable.set("salmon", "#FA8072");
hashTable.set("lightcoral", "#F08080");
hashTable.set("mediumvioletred", "#C71585");
hashTable.set("plum", "#DDA0DD");
hashTable.set("plum", "#DDA0DD"); // Duplicate, won't be added.

// Index 0, 3, 10, 13, and 16 all have one item.
// Index 8 has two items, which is 'maroon' and 'yellow'.
console.log(hashTable);

console.log(hashTable.get("yellow"));

console.log(hashTable.keys());
console.log(hashTable.values());
