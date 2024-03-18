
/*
Remove Element
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
*/


let nums = [3,2,2,3];
let val = 3;

function removeElement(nums, val) {
    let k = 0; // Inicializamos k para contar los elementos que no son igual a val

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // Movemos el elemento actual a la posición k
            k++; // Incrementamos k ya que hemos encontrado un elemento diferente a val
        }
    }

    return k; // Retornamos k, que es el número de elementos que no son igual a val
}

console.log(removeElement(nums, val)); // Deberías obtener 2, porque ejecutamos la función principal
console.log(nums); // Deberías obtener [2, 2, 2, 3] (Los primeros 2 elementos son diferentes de val)