// 1
/*Алгоритмов сортировки существует много, основные это:
Пузырьковая сортировка (Bubble Sort)
Сортировка выбором (Selection Sort)
Сортировка вставками (Insertion Sort)
Сортировка слиянием (Merge Sort)
Быстрая сортировка (Quick Sort)*/

// 2
// Способ 1: Создание объекта с помощью литерала
let person1 = {
   name: "John",
   age: 30,
   sayHello: function () {
     console.log(`Hello, my name is ${this.name}.`);
   },
 };
 
 // Способ 2: Создание объекта с использованием конструктора
 function Person(name, age) {
   this.name = name;
   this.age = age;
   this.sayHello = function () {
     console.log(`Hello, my name is ${this.name}.`);
   };
 }
 
 let person2 = new Person("Alice", 25);
 
 // Способ 3: Создание объекта с использованием класса (ES6+)
 class PersonClass {
   constructor(name, age) {
     this.name = name;
     this.age = age;
   }
 
   sayHello() {
     console.log(`Hello, my name is ${this.name}.`);
   }
 }
 
 let person3 = new PersonClass("Bob", 35);
 
 
 //////////////////////////////
 class AnotherPerson extends Person {
   constructor(name, age, additionalInfo) {
     super(name, age);
     this.additionalInfo = additionalInfo;
   }
 
   someFunc() {
     console.log(`Name: ${this.name}, Age: ${this.age}, Additional Info: ${this.additionalInfo}`);
   }
 }
 
 
 Person.prototype.logInfo = function() {
   console.log(`Name: ${this.name}, Age: ${this.age}, Additional Info: ${this.additionalInfo}`);
 };
 
 
 
 
 // 3
 class SuperPerson {
   constructor(name) {
     this._name = name; // Используем приватное свойство с нижним подчеркиванием
   }
 
   get name() {
     return this._name;
   }
 
   set name(newName) {
     this._name = newName;
   }
 }
 
 class SubPerson extends SuperPerson {
   constructor(name, additionalInfo) {
     super(name); // Вызываем конструктор суперкласса и передаем имя
     this.additionalInfo = additionalInfo;
   }
 
   logInfo() {
     console.log(`Name: ${this.name}, Additional Info: ${this.additionalInfo}`);
   }
 }
 
 
 
 ///////////////////////////////////
 function firstSum(arr, total) {
   const numSet = new Set();
 
   for (let num of arr) {
     const complement = total - num;
     if (numSet.has(complement)) {
       return [complement, num];
     }
     numSet.add(num);
   }
 
   return null;
 }
 
 // Сложность алгоритма O n т.к. проходимся по каждому элементу массива 1 раз.
 