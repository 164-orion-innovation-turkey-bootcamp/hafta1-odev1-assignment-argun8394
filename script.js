let array = [1,2,3,4,5,6,7,8,9];
function handleIndex(array) {
 

    let target1 = array[Math.floor(Math.random() * array.length)];
    let target2 = array[Math.floor(Math.random() * array.length)];
    let target = target1 + target2;
    for (let i = 0; i < array.length; i++) {
      if (array[i] < target) {
        for (var j = 0; j < array.length; j++) {
          let result = array[i] + array[j];
          //console.log(target,result);
          //console.log(target1, target2);
          if (target === result) {
            return [array.indexOf(target1), array.indexOf(target2)];
            
          }
         
          
        }
       
      }
     
    }
  }
  const response = handleIndex(array)
  console.log(response)