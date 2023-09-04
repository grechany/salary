// Определяем функцию getSalary глобально
function getSalary(salary, workDays, workHours) {
    let salaryDay = salary / workDays;
    return salaryDay / workHours;
}

// Находим кнопку с помощью её ID
const calculateButton = document.getElementById('calculate');

// Назначаем функцию-обработчик для события "click" на кнопке
calculateButton.addEventListener('click', function () {
    // Получаем значения из полей ввода внутри обработчика события
    const salary = parseFloat(document.getElementById('salary').value);
    const workDays = parseFloat(document.getElementById('workDays').value);
    const workHours = parseFloat(document.getElementById('workHours').value);

    if (!isNaN(salary) && !isNaN(workDays) && !isNaN(workHours)) {
        // Вызываем функцию getSalary и сохраняем результат
        const perHour = getSalary(salary, workDays, workHours);
        
        // Далее можно делать что-то с результатом, например, выводить его
        resultElement.textContent = `Hourly Salary: $${perHour.toFixed(2)}`;
    } else {
        resultElement.textContent = 'Please enter valid numbers for all fields.';
    }
});

const resultElement = document.getElementById('result');