class HashTable {
  constructor(size = 53) {
    this.table = new Array(size);
  }

  // Simple hash function
  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.table.length;
    }
    return total;
  }

  // Insert key-value pair
  set(key, value) {
    const index = this._hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }

  // Retrieve value by key
  get(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let pair of this.table[index]) {
        if (pair[0] === key) {
          return pair[1];
        }
      }
    }
    return undefined;
  }

  // Display the hash table
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

// Usage
const ht = new HashTable();
ht.set("name", "Alice");
ht.set("age", 25);
ht.set("city", "Berlin");

console.log(ht.get("name")); // Output: Alice
ht.display();
