document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display__result');
    const buttons = document.querySelectorAll('.number, .variable');
    let currentInput = '';
    let operator = '';
    let firstOperand = null;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;

            if (this.classList.contains('number')) {
                currentInput += value;
                display.textContent = currentInput;
            } else if (this.classList.contains('variable')) {
                if (value === 'C') {
                    currentInput = '';
                    operator = '';
                    firstOperand = null;
                    display.textContent = '0';
                } else if (value === '=') {
                    if (firstOperand !== null && operator !== '' && currentInput !== '') {
                        const secondOperand = parseFloat(currentInput);
                        let result;
                        switch (operator) {
                            case '+':
                                result = firstOperand + secondOperand;
                                break;
                            case '-':
                                result = firstOperand - secondOperand;
                                break;
                            case '*':
                                result = firstOperand * secondOperand;
                                break;
                            case '/':
                                result = firstOperand / secondOperand;
                                break;
                        }
                        display.textContent = result;
                        currentInput = result.toString();
                        operator = '';
                        firstOperand = null;
                    }
                } else {
                    if (currentInput !== '') {
                        firstOperand = parseFloat(currentInput);
                        operator = value;
                        currentInput = '';
                    }
                }
            }
        });
    });
});