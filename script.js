//global variable example
let globalCount = 0;

// Function with parameter & return value
function addNumbers(a, b) {
    // Local variable example
    let sum = a + b;
    return sum;
}

// Event listener for button color change on click
const colorBtn = document.getElementById('colorBtn');
colorBtn.addEventListener('click', function() {
    globalCount++;
    alert(`Button clicked! Count: ${globalCount}\nSum example: ${addNumbers(globalCount, 5)}`);
});

// Part 3: Trigger CSS animation dynamically
const box = document.getElementById('box');
const animateBtn = document.getElementById('animateBtn');

animateBtn.addEventListener('click', function() {
    // Remove class if exists to allow re-triggering
    box.classList.remove('animate');
    void box.offsetWidth; // Trigger reflow
    box.classList.add('animate');
});