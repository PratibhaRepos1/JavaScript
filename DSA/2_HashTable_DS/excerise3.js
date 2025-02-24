//create a get and set method for the HashTable class that uses the following hash function:

class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }

    set(key, value) {
      let address = this._hash(key);
      if(!this.data[address]){
        this.data[address] = [];
      }
      this.data[address].push([key, value]);
    }
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000)
  myHashTable.get('grapes')