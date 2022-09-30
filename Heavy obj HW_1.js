const age_1 = 10;
const age_2 = 18;
const age_3 = 60;

// if (age_1 < age_2) {
//     console.log("You don't have access, cause your age is " + age_1 + ". It's less then " + age_2);
// } else if (age >= age_2 && age < age_3) {
//     console.log("Welcome!");
// } else if (age_1 > age_3) {
//     console.log("Keep calm and look Culture channel");
// } else {
//     console.log("Technical work");
// }

// if - это условие которое проверяет на true, else - это если if не true, else if - проверяет дополнительно значения, до финального else

// *1
// Преобразовать написанный выше код в функцию, принимающую на вход возвраст.

// const checkAge = function (age) { // const - запрещает в дальнейшем изменять наш тип данных checkAge, в перменную мы присвоили функцию и дальше мы ничего другого присвоить не сможем (защита от дурака)

//     if (age < age_2) {
//         console.log("You don't have access, cause your age is " + age + ". It's less then " + age_2);
//     } else if (age >= age_2 && age < age_3) {
//         console.log("Welcome!");
//     } else if (age > age_3) {
//         console.log("Keep calm and look Culture channel");
//     } else {
//         console.log("Technical work");
//     }
// }

// checkAge(17)
// checkAge(18)
// checkAge(61)
// checkAge('Hello')

// *2

// const checkAge = function (age) {
//     if (typeof age == 'number') {  // это первичная проверка, того что age является number
//         if (age < age_2) {
//             console.log("You don't have access, cause your age is " + age + ". It's less then " + age_2);
//         } else if (age >= age_2 && age < age_3) {
//             console.log("Welcome!");
//         } else if (age > age_3) {
//             console.log("Keep calm and look Culture channel");
//         } else {
//             console.log("Technical work");
//         }
//     } else { console.log('Not integer valid') }  // если юзер введёт не валидные данные, вместо цифр буквы, то выдаст этот ответ
// }

// checkAge(17)
// checkAge(18)
// checkAge(61)
// checkAge('Hello')

// *3
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускались, преобразовываясь в number

// const checkAge = function (age) {

//     age = Number(age) // это строкой мы преобразовываем age в number в любом случае, если оно уже число, то при преобразовании оно не изменится

//     if (!isNaN(age)) {  // функция !isNaN проверяет лежит ли в данной функции значение NaN - not a number, ! - это логическое "не"
//     if(Number(age)) {  // эта строчка всегда отработает в буливое значение, то есть в true
//     if (+age) {   // разные способы перевода чисел из строчки в цифры
//         if (age < age_2) {
//             console.log("You don't have access, cause your age is " + age + ". It's less then " + age_2);
//         } else if (age >= age_2 && age < age_3) {
//             console.log("Welcome!");
//         } else if (age > age_3) {
//             console.log("Keep calm and look Culture channel");
//         } else {
//             console.log("Technical work");
//         }
//     } else { console.log('Not integer valid') }
// }


// checkAge(17)
// checkAge(18)
// checkAge(61)
// checkAge('25')
// checkAge('Hello 25')

// *4
// Преобразовать задание 3* таким образом, чтобы возвраст вводился используя функцию prompt в привязанной вёрстке 

// для этого надо создать html файл, затем в нём написать строчку script в которой мы укажем имя файла который нужно запустить. открыть с помощью live servers

const checkAge = function (age) {

    age = Number(age)

    if (+age) {

        if (age < age_2) {
            console.log("You don't have access, cause your age is " + age + ". It's less then " + age_2);
        } else if (age >= age_2 && age < age_3) {
            console.log("Welcome!");
        } else if (age > age_3) {
            console.log("Keep calm and look Culture channel");
        } else {
            console.log("Technical work");
        }
    } else { console.log('Not integer valid') }
}


checkAge(17)
checkAge(18)
checkAge(61)
checkAge('25')
checkAge('Hello 25')

let agePrompt = prompt('Enter age')
// let agePrompt = +prompt('Enter age') - если написать так, то значение prompt будет сразу переведено в number; + = number; если + не ставить, то у нас значение string
checkAge(agePrompt)

