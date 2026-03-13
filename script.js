function calculateDash() {
    const inputs = document.querySelectorAll('.dash-input');
    let sum = 0;
    let count = 0;

    inputs.forEach(input => {
        if (input.value !== "") {
            sum += parseFloat(input.value);
            count++;
        }
    });

    // QuickDASH requires at least 10/11 questions answered
    if (count >= 10) {
        const score = ((sum / count) - 1) * 25;
        document.getElementById('result').innerText = score.toFixed(2);
    } else {
        alert("Please complete at least 10 items.");
    }
}
