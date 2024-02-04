
// 1)Задание

//     //  let age = +prompt('Ведите свой бал по экзамену')
// if(age >=59){
//     alert("Вы сдали");
// } else {
//     alert("Вы не сдали")
// }

// 2)Задание

    //    let age = +prompt('Ведите пожалуйста свой возраст')

    //    if (age < 18) {
    //        alert("Вы несовершеннолетний");
    //    } else if (age >= 18 && age <= 65) {
    //        alert("Вы взрослый");
    //    } else {
    //        alert("Вы пожилой человек(изюм)");
    //    }

// 3)Задание

//     const number = parseInt(prompt("Введите число:"));

// if (isNaN(number)) {
//     alert("Вы ввели не число");
// } else {
//     let message = number > 0 ? "положительное" : "отрицательное";
//     message += number % 2== 0 ? "чётное" : "нечётное";
//     alert("Число " + message);
// }

// 4)Задание

// const drink = +prompt(' Ведите один из напитков(Лате, вишнёвый сок,чай)')

// if (drink === 'Лате') {
//   alert('Вы выбрали кофе');
// } else if (drink === 'чай') {
//   alert('Вы выбрали чай');
// } else if (drink === 'сок') {
//   alert('Вы выбрали вишнёвый сок');
// } else {
//   alert('К сожалению, такого напитка нет в нашем меню');
// }

// 5)Задание

const distance = prompt('Введите расстояние до места назначения в км:');

if (distance < 5) {
  alert('Советую пройтись пешком');
} else if (distance <= 20) {
  alert(' Советую взять велосипед');
} else {
  alert(' Советую воспользоваться автобусом');
}



// 2)Глава
// 1)Задание



// const num1 = prompt('Введите первое число:');const num2 = prompt('Введите второе число:');const maxNumber = (num1 > num2) ? num1 : num2;alert(`Максимальное число: ${maxNumber}`);



//2)Задание 



// const score = prompt('Введите балл по тесту (от 0 до 100):');const grade = (score >= 90) ? 'Отлично' : (score >= 70) ? 'Хорошо' : 'Удовлетворительно';alert(`Ваша оценка: ${grade}`);



// 3)Задание



// function checkEvenNumber(num) { return num % 2 === 0 ? "Число четное" : "Число нечетное";}const number = prompt("Введите число:");alert(checkEvenNumber(Number(number)));



// 4)Задание



// const language = prompt("Выберите язык: английский или французский");const greeting = language === "английский" ? "Hello" : language === "французский" ? "Bonjour" : "Я не понимаю выбранного языка";alert(greeting);



// 5)Задание



