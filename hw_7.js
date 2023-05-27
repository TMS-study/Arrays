// Task 1
/* Дан массив:
```javascript
    const colors = ['red', 'green', 'blue']
```
Выведите в консоль его длину. */

//const colors = ['red', 'green', 'blue'];
//console.log(colors.length);

// Task 2
/* Дан массив:

```javascript
    const animals = ['monkey', 'dog', 'cat']
```
Выведите в консоль его последний элемент вне зависимости от его длинны */

/* const animals = ['monkey', 'dog', 'cat'];
console.log(animals[animals.length - 1]); */

// Task 3
/* Дан массив:
```javascript
    const numbers = [5, 43, 63, 23, 90]
```
Удалите все элементы в массиве и выведите в консоль полученный результат.
> Реализуйте решение двумя способами. */

/* const numbers = [5, 43, 63, 23, 90];
numbers.splice(0);
console.log(numbers);

const numbers1 = [5, 43, 63, 23, 90];
let numbers2 = numbers1.slice(5);
console.log(numbers2); */

// Task 4
/* Дан массив:
```javascript
    const students = ['Polina', 'Dasha', 'Masha']
```
+ Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
+ Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
+ Полученный результат не забудьте вывести в консоль. */

/* const students = ['Polina', 'Dasha', 'Masha'];
students.pop(students[students.length - 1]);
students.push('Borya');
students.shift(0);
students.unshift('Andrey');
console.log(students); */

// Task 5
/* javascript
    const cats = ['Gachito', 'Tom', 'Batman']
```
Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**. */

/* const cats = ['Gachito', 'Tom', 'Batman'];
for(let i = 0; i < cats.length; i++){
    console.log(cats[i]);
}

const cats1 = ['Gachito', 'Tom', 'Batman'];
for(let name of cats1){
    console.log(name);
} */

// Task 6
/* ```javascript
    const evenNumbers = [2, 4, 6, 8, 10]
    const oddNumbers = [1, 3, 5, 7, 9]
```
+ Соедините два массива чисел в один.
+ В полученном массиве попробуйте найти индекс числа **`8`** */

/* const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
console.log(evenNumbers.concat(oddNumbers));
const newNumbers = evenNumbers.concat(oddNumbers);
console.log(newNumbers.indexOf(8)); */

// Task 7
/* Дан массив:
```javascript
    const binary = [0, 0, 0, 0]
```
+ Наш бинарный массив неполный, в нем явно не хватает единиц.
+ Превратите данный массив в строку.
> [0, 0, 0, 0] -> '0101010' */

// Решение сплайсом
/* const arr = [0, 0, 0, 0];
arr.splice(1, 0, 1);
arr.splice(3, 0, 1);
arr.splice(5, 0, 1);
console.log(arr.join(''));

// решение с циклом
const arr1 = [0, 0, 0, 0];
const newArr = [];

for (let i = 0; i < arr1.length; i++) {
    newArr.unshift(arr[i]);
    newArr.unshift(1);
    
  }
newArr.shift();
console.log(newArr.join('')); */

// ADVANCED level
// Task 1
/* Реализуйте функцию которая будет проверять, является ли слово палиндромом.*/
// создаем новый массив и заполняем его элементами
//разворачиваем элементы и преобр в строку
//сравниваем нашу строку и исходной

/* function isPalindrom(str)  {
    const arr = [];
    for(let i = 0; i < str.length; i++){
        arr.push(str[i]);
    }
    
    const arr1 = arr.reverse().join('');

    if(arr1 === str){
        return true
    }else return false
    
}
    console.log(isPalindrom('alla')); */

// Task 2
/* javascript
    const matrix = [
        [12, 98, 78, 65, 23],
        [54, 76, 98, 43, 65],
        [13, 324, 65, 312],
        [9092, 22, 45, 90000],
    ]
```
> Выведите в консоль среднее значение чисел в многомерном массиве. */
//соед массивы в строку, потом обратно, не забыть поменять тип на намбе
//сложить и разделить на длину массива. округлить?

/* const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
];
const matrix2 = matrix.join(',').split(',');
const matrix3 = matrix2.map(Number);
//const matrix3 = matrix2.map((el)=> {return Number(el)});
const matrix4 = Math.round(matrix3.reduce((prevValue, curValue) => prevValue + curValue) / matrix3.length);

console.log(matrix4);
 */

// Task 3
/* Дан массив:
```javascript
   const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
```
Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль.  */
// создать два пустых массива
// циклом перебрать все значения
// если они положительные или 0 = запушить в новый массив
// если отрицательные запушить в другой

/* const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
const plusNumber = [];
const minusNumber = [];

for(let el of mixedNumbers){
    if ( el > 0 || el === 0){
        plusNumber.push(el);
    } else {
        minusNumber.push(el);
    }
}

console.log(plusNumber);
console.log(minusNumber); */

// Task 4
/* Создать массив длинной не менее 5, из динамически созданных случайных чисел. Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив. В конце вывести оба массива в консоль. */

/* const numbers3 = [];
const numbers4 = [];

for (let i = 0; i < 5; i++) {
  const randomNumber = Math.round(Math.random() * 100); 
  numbers3.push(randomNumber);
  const cube = Math.pow(randomNumber, 3);
  numbers4.push(cube);
}

console.log(numbers3);
console.log(numbers4); */