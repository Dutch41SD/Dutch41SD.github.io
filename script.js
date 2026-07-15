// --- TacoCat (Palindrome Checker) ---
document.getElementById('tc-btn').addEventListener('click', function() {
    
    
    let inputString = document.getElementById('tc-input').value;
    
    let cleanString = inputString.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    if (cleanString === "") {
        document.getElementById('tc-result').innerText = "Please enter a word or phrase.";
        return; // This stops the program from running the rest of the code
    }

    let reversedString = cleanString.split('').reverse().join('');
    
    if (cleanString === reversedString) {
        document.getElementById('tc-result').innerText = `Success! "${inputString}" is a palindrome.`;
    } else {
        document.getElementById('tc-result').innerText = `Nope. "${inputString}" is not a palindrome.`;
    }
    
});



// --- Loan Shark (Amortization Calculator) ---
document.getElementById('ls-btn').addEventListener('click', function() {
    
    let principal = parseFloat(document.getElementById('ls-amount').value);
    let interestRate = parseFloat(document.getElementById('ls-rate').value);
    let months = parseInt(document.getElementById('ls-months').value);
    
    let resultText = document.getElementById('ls-result');

    // Prevent blank or negative inputs
    if (isNaN(principal) || isNaN(interestRate) || isNaN(months) || principal <= 0 || months <= 0) {
        resultText.innerText = "Please enter valid positive numbers.";
        return;
    }

    let monthlyRate = (interestRate / 100) / 12;
    let monthlyPayment = 0;

    
    if (monthlyRate === 0) {
        monthlyPayment = principal / months; // If there is 0% interest
    } else {
        monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    }

    
    resultText.innerText = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
    
});