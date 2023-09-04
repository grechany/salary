// Определяем функцию getSalary глобально
function getSalary(salary, workDays, workHours) {
    let salaryDay = salary / workDays;
    return salaryDay / workHours;
}

// Находим кнопку с помощью её ID
const calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', function () {
    const salary = parseFloat(document.getElementById('salary').value);
    const workDays = parseFloat(document.getElementById('workDays').value);
    const workHours = parseFloat(document.getElementById('workHours').value);
    
    const currencySelect = document.getElementById('currency');
    const selectedCurrency = currencySelect.value; // Получаем выбранную валюту

    if (!isNaN(salary) && !isNaN(workDays) && !isNaN(workHours)) {
        const perHour = getSalary(salary, workDays, workHours);
        
        // Выводим результат с выбранной валютой из выпадающего списка
        resultElement.textContent = `Hourly Salary: ${perHour.toFixed(2)} ${selectedCurrency}`;
    } else {
        resultElement.textContent = 'Please enter valid numbers for all fields.';
    }
});

const resultElement = document.getElementById('result');