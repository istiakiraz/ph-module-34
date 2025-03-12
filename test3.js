// 34-6  Async/Await in details  

// 34-7 setInterval and clearInterval  

console.log(1);
console.log(2);
console.log(3);
let count = 0;

setTimeout(() => { console.log("time let");
    
}, 1000);

const clockID = setInterval(()=>{
   count++;

   console.log(count);

   clearInterval(clockID) //variable er majhe rekhe niche clearInterval(variable er nam) dilei hbe. eta theme jabe. 
}, 2000)

console.log(4);
console.log(5);
console.log(6);