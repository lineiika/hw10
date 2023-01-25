
const array = [1, 2, 3, 4, 5, 6, 7];
console.log (array);

function removeElement (array) {
   const newArr = [];
   array.splice (4,1,);
   newArr.push(array)

   return newArr;
}

const newArr = removeElement (array)
console.log (newArr);
