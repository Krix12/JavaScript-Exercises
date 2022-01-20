const uppercase =  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 

const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function caesarCipher(word, times) { 
  const wordarray = word.split("");
  const final = [];
  
  wordarray.forEach(function(element) {
    
    const isUpperCase = (element) => /^[A-Z]*$/.test(element);
    if(isUpperCase(element)) {
      const uppernumber = uppercase.indexOf(element) + times;
      if(uppernumber > uppercase.length - 1) {
        let fromstart = uppernumber - uppercase.length;
        while (fromstart > uppercase.length - 1) {
          fromstart = fromstart - uppercase.length
        }
       
        final.push(uppercase[fromstart])
       
      }
     final.push(uppercase[uppernumber])
    
    }
    else if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(element)) {
      final.push(element)
    }
    else if (/^[a-z]*$/.test(element)){
      const lowernumber = lowercase.indexOf(element) + times;
         if(lowernumber > lowercase.length - 1) {
        let fromstartlower = lowernumber - lowercase.length;
        while (fromstartlower > lowercase.length - 1) {
          fromstartlower = fromstartlower - lowercase.length
        } 
        final.push(lowercase[fromstartlower])
       
      }
      else {


      final.push(lowercase[lowernumber])
     
    }
    }
  })
 
 //return final.join("")
 console.log(final.join(""))
} 

caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)
//Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj
