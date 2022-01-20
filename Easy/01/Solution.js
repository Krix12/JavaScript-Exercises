const input = 4;

const sumarray = [];
for (i = 1; i < input + 1; i++) {
 sumarray.push(i)
}
console.log(sumarray)
//sumarray = [1, 2, 3, 4]

 sum = 0;
sumarray.forEach(function(element) {
    sum += element
    //calculates sum of the array
})
console.log(sum)
//OUTPUT: 10
