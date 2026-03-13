function calculateQuickDash() {
    // Select all radio buttons that are currently checked
    const selectedOptions = document.querySelectorAll('input[type="radio"]:checked');
    
    let sum = 0;
    const totalQuestions = 11; // Standard QuickDASH count
    const count = selectedOptions.length;

    selectedOptions.forEach(option => {
        sum += parseFloat(option.value);
    });

    // Valid if at least 10 out of 11 questions are answered
    if (count >= 10) {
        const score = ((sum / count) - 1) * 25;
        document.getElementById('dash-result').innerText = score.toFixed(2);
    } else {
        alert(`Please answer at least 10 questions. (Currently: ${count})`);
    }
}
