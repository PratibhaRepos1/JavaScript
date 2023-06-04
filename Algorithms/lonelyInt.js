function lonelyInt(arr) {
  let result;
  let count = {};

 for (const element of arr) {
    if(count[element]) {
        count[element] +=1;
    } else {
        count[element] = 1;
      
    }
 }

 let entries = Object.entries(count);

 for(let i=0; i< entries.length; i++) {
    let str = entries[i];
    if(str[1] === 1) {
        result = parseInt(str[0])
    }
 }
 
return result;



  
}

lonelyInt([1,2,3,4,3,2,1]);
