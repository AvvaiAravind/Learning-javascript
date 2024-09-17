let a = 10;
console.log(a);

const max = 57;

const actual = max - 13;

const percentage = actual / max;

console.log(percentage);

const one = "Hello";
const two = "how are you ?";
const joined = `${one},${two}`;
console.log(joined);

const button = document.querySelector("button");

button.addEventListener("click", greet);

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.getElementById("greeting");
  greeting.textContent = `Hello, ${name}, nice to see you!`;
}

const newLine = `One day you finally know


what you had to do, and began`;
console.log(newLine);

const myString = "Hello world!";
console.log(myString.at(-1));

let text = "Apple, Banana, Kiwi";
let part = text.slice(-12);
console.log(part);

const who = prompt("Who's there?");

if (who === null || who === "") {
  alert("Canceled");
} else if (who === "Admin") {
  const password = prompt("Enter your password");
  if (password === null || password === "") {
    alert("Canceled");
  } else if (password === "TheMaster") {
    alert("Welcome");
  } else {
    alert("Wrong password");
  }
} else {
  alert("I don't know you!");
}
