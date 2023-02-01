
const array = [1, 2, 3, 4, 5, 6, 7];
console.log (array);

function removeElement(array, index){
   array.splice(4, 1);
}
removeElement(array);

console.log(array);
