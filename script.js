// ===============================
// Part 1: Variables and Conditionals
// ===============================
let age = 20;
let name = "John";

if (age >= 18) {
    console.log(name + " is an adult.");
} else {
    console.log(name + " is a minor.");
}

// ===============================
// Part 2: Custom Functions
// ===============================

// Function 1: Greet user
function greetUser(userName) {
    return "Hello, " + userName + "!";
}

// Function 2: Add two numbers
function addNumbers(a, b) {
    return a + b;
}

// ===============================
// Part 3: Loops
// ===============================

// Example 1: For loop
function showNumbers() {
    let output = "";
    for (let i = 1; i <= 5; i++) {
        output += i + " ";
    }
    document.getElementById("loopOutput").innerText = "For Loop Output: " + output;
}

// Example 2: While loop
function countDown(n) {
    let output = "";
    while (n > 0) {
        output += n + " ";
        n--;
    }
    console.log("While Loop Output: " + output);
}

// ===============================
// Part 4: DOM Interactions
// ===============================

// 1. Change text when button is clicked
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("message").innerText = greetUser(name);
});

// 2. Change header color
document.getElementById("colorBtn").addEventListener("click", function() {
    document.getElementById("main-title").style.color = "red";
});

// 3. Show loop result in page
document.getElementById("loopBtn").addEventListener("click", function() {
    showNumbers();  // Calls the for loop function
    countDown(5);   // Calls the while loop function
});
