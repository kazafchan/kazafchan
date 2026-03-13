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
function calculateMHQ() {
    // Function Domain Logic (Questions mhq1, etc.)
    const funcOptions = document.querySelectorAll('input[name^="mhq1"]:checked');
    if (funcOptions.length > 0) {
        let sum = 0;
        funcOptions.forEach(opt => sum += parseInt(opt.value));
        // Normalizing to 0-100: ((Sum - Min) / (Max - Min)) * 100
        // For MHQ, usually lower raw is better, so we flip it
        let score = ((5 - (sum / funcOptions.length)) / 4) * 100;
        document.getElementById('score-function').innerText = score.toFixed(1) + "%";
    }

    // Pain Domain Logic (Questions mhq_pain1, etc.)
    const painOptions = document.querySelectorAll('input[name^="mhq_pain"]:checked');
    if (painOptions.length > 0) {
        let sum = 0;
        painOptions.forEach(opt => sum += parseInt(opt.value));
        // In Pain domain, 1 is "no pain". To make 100 = "no pain":
        let score = ((5 - (sum / painOptions.length)) / 4) * 100;
        document.getElementById('score-pain').innerText = score.toFixed(1) + "%";
    }
}
