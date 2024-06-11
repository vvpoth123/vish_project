document.addEventListener('DOMContentLoaded', () => {
    const correctAnswers = {
        0: '2', // Subbareddy
        1: '7', // Hrishav
        2: '4', // Lasya
        3: '5', // Likitha
        4: '10', // Neethu
        5: '9', // Arnab
        6: '3'  // Vinay
    };

    document.querySelectorAll('li').forEach((li, index) => {
        li.querySelector('input[type="submit"]').addEventListener('click', () => {
            const selectedOption = li.querySelector('select').value;
            const displayArea = li.querySelector('.display-area');

            displayArea.innerHTML = ''; // Clear previous result

            if (selectedOption === correctAnswers[index]) {
                const tick = document.createElement('div');
                tick.classList.add('tick');
                tick.innerHTML = '✔️ Correct';
                displayArea.appendChild(tick);
            } else {
                const cross = document.createElement('div');
                cross.classList.add('cross');
                cross.innerHTML = '❌ Incorrect';
                displayArea.appendChild(cross);
            }
        });
    });
});
