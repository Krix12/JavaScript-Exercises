const steps = 4;

if (steps === 0) {
    console.log(`${0} sticks`)
} else {
   
const sumarray = [6] 
for (i = 0; i < steps - 1; i++) {
    sumarray.push(5)
}
//sumarray = [6, 5, 5, 5] 

sticks = 0;
sumarray.forEach(function(element) {
    sticks += element
 //calculates the sum of sumarray
})
console.log(`${sticks} sticks`)
//OUTPUT: 21 sticks
}
