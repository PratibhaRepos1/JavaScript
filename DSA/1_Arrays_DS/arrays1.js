// 2 types: static and dynamic 
// static: fixed in size
// dynamic: allow to copy, allocate memory and build a new array, add more items,

/* Implementating An Array */
class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length -1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftitems(index);
    }

    shiftitems(index) {
        for(let i= index; i < this.length - 1; i++) {
            this.data[i] = this.data[i+1];
        }
       delete this.data[this.length-1];
       this.length--;
    }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
// newArray.pop();
// newArray.pop();

newArray.push('are');
newArray.push('nice');
newArray.delete(2);
console.log(newArray);

