const age_1 = 10;
const age_2 = 18;
const age_3 = 60;

if (age_1 < age_2) {
    console.log("You don't have access, cause your age is " + age_1 + ". It's less then " + age_2);
} else if (age >= age_2 && age < age_3) {
    console.log("Welcome!");
} else if (age_1 > age_3) {
    console.log("Keep calm and look Culture channel");
} else {
    console.log("Technical work");
}

// *1
// Преобразовать написанный выше код в функцию, принимающую на вход возвраст.

if (age < age_2) {
        console.log("You don't have access, cause your age is " + age + ". It's less then " + age_2);
    } else if (age >= age_2 && age < age_3) {
        console.log("Welcome!");
    } else if (age > age_3) {
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
    }
}

checkAge(17)
checkAge(18)
checkAge(61)
checkAge('Hello')

// *2

const checkAge = function (age) {
    if (typeof age == 'number') {  
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
checkAge('Hello')

// *3
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускались, преобразовываясь в number

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

// *4
// Преобразовать задание 3* таким образом, чтобы возвраст вводился используя функцию prompt в привязанной вёрстке 

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
checkAge(agePrompt)
