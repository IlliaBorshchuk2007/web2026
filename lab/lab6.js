// Завдання 1
let a = 50;
let b = 7;

console.log("Сума:", a + b);
console.log("Різниця:", a - b);
console.log("Множення:", a * b);
console.log("Ділення:", a / b);

// Завдання 2
let firstName = "Саша";
let lastName = "Табачук";

let fullName = firstName + " " + lastName;

console.log("Привіт, " + fullName + "!");

// Завдання 3
let age = 20;

if (age >= 18) {
    console.log("Доступ дозволено");
} else {
    console.log("Доступ заборонено");
}

// Завдання 4
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Завдання 5
function square(number) {
    return number * number;
}

console.log(square(5));

// Завдання 6
let fruits = ["Apple", "Banana", "Orange"];

fruits.push("Mango");

console.log(fruits);