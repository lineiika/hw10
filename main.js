
const array = [1, 2, 3, 4, 5, 6, 7];
console.log (array);

<<<<<<< HEAD

   function removeElement(array, index){
   array.splice(4, 1);
   }
  


removeElement(array);

console.log(array);
=======
function removeElement (array) {
   const newArr = [];
   array.splice (4,1,);
   newArr.push(array)

   return newArr;
}

const newArr = removeElement (array)
console.log (newArr);
>>>>>>> 44207c762d68685f689c127b42109910ef967744
