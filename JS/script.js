// Function to flip the card
    function flipCard() {
            const card = document.getElementById('flipCard');
            card.classList.toggle('flipped');
    }

 
// Global variables
        let globalCounter = 0;
        const globalMessage = "I am a global variable!";
        
// Function with parameters and return value
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    
    let result;
        
        switch(operation) {
            case 'add':
                result = addNumbers(num1, num2);
                break;
            case 'subtract':
                result = subtractNumbers(num1, num2);
                break;
            case 'multiply':
                result = multiplyNumbers(num1, num2);
                break;
            case 'divide':
                result = divideNumbers(num1, num2);
                break;
            default:
                result = "Invalid operation";
        }
        
     document.getElementById('calcResult').innerHTML =`The result is: <strong>${result}</strong>`;
}
        
// Helper functions with parameters and return values
    function addNumbers(a, b) {
            return a + b;
        }
        
    function subtractNumbers(a, b) {
            return a - b;
        }
        
    function multiplyNumbers(a, b) {
            return a * b;
        }
        
    function divideNumbers(a, b) {
            if (b === 0) return "Cannot divide by zero!";
            return a / b;
        }
        
// Function to demonstrate scope
function demoScope() {
            // Local variable
         let localCounter = 0;
         const localMessage = "I am a local variable!";
            
// Modify global variable
    globalCounter++;
            
// Modify local variable
    localCounter++;
            
// Update display
     document.getElementById('globalScope').textContent = 
         `Counter: ${globalCounter}, Message: ${globalMessage}`;
         
     document.getElementById('localScope').textContent = 
         `Counter: ${localCounter}, Message: ${localMessage}`;
         
     document.getElementById('scopeResult').innerHTML = `Global variable accessible and modified. Local variable created and modified.`;
}
        
// Function that tries to access local variable from another function
function tryAccessLocal() {
     try {
         // This will cause an error because localCounter is not accessible here
         document.getElementById('scopeResult').innerHTML = 
             `Trying to access local variable: ${localCounter}`;
     } catch (error) {
         document.getElementById('scopeResult').innerHTML = `Error: ${error.message}<br>This demonstrates that local variables are not accessible outside their function.`;
     }
}
        
// Functions for animation demo
function changeColor() {
    const color = document.getElementById('color').value;
    const circle = document.getElementById('circle');
    const square = document.getElementById('square');
    
    circle.style.backgroundColor = color;
    square.style.backgroundColor = color;
}
        
function moveShapes() {
    const circle = document.getElementById('circle');
    const square = document.getElementById('square');
    
    // Generate random positions
    const circleTop = Math.floor(Math.random() * 150);
    const circleLeft = Math.floor(Math.random() * 300);
    
    const squareTop = Math.floor(Math.random() * 150);
    const squareLeft = Math.floor(Math.random() * 300);
    
    // Apply new positions
    circle.style.top = `${circleTop}px`;
    circle.style.left = `${circleLeft}px`;
    
    square.style.top = `${squareTop}px`;
    square.style.left = `${squareLeft}px`;
}
        
function resetAnimation() {
    const circle = document.getElementById('circle');
    const square = document.getElementById('square');
    
    circle.style.top = '75px';
    circle.style.left = '50px';
    circle.style.backgroundColor = '#3498db';
    
    square.style.top = '75px';
    square.style.left = '250px';
    square.style.backgroundColor = '#e74c3c';
    
    document.getElementById('color').value = '#3498db';
    
}
// Animation function
//flip paper function
function flipPaper() {
    const paper = document.getElementById('flipPaper');
    paper.classList.toggle('flipped');
}// Paperanimation function
function paperBox(animation) {
    const box = document.getElementById('paperBox');
    box.classList.remove('bounce', 'shake', 'pulse');
    void box.offsetWidth; // Trigger reflow to restart animation
    box.classList.add(animation);
}
// Loader animation function
function toggleLoader(action) {
    const loader = document.getElementById('loader');
    if (action === 'start') {
        loader.classList.add('active');
    } else {
        loader.classList.remove('active');
    }
}

