// Write a script that counts and prints the result of the product of degree 2 to 10, starting at degree 1

let a = 1
let res = 2
while (a < 10) {
    res = res * 2
    a++
} console.log(res)


// Convert 1 of the task into the function, taking as input a number and a power to which the number will be raised

function step(a, step) {
    let res = a
    for (let i = 1; i < step; i++) {
        res = res * a
    }
    console.log(res)
}
step(3, 7)

// Write a script, which will output 5 strings into the console, so that the first strings will output :), the second :):) and so on'.
// Convert it into a function, taking as an input a string, which will be printed to the console (as in the condition smiley face), as well as the number of strings to be output

function smile(stroka, numberOfRows) {
    let i = 1
    res = stroka
    while (i <= numberOfRows) {
        console.log(res)
        res = res + stroka
        i++
    }
}
smile('||', 7)


// Write a function that takes a word as input. The function's job is to count and print on the console how many vowels are in the word and how many consonants.

function word(word) {
    let leters = Array.from(word)
    glasnyRes = 0
    soglasnRes = 0
    let glasny = 'eyuioa'.split('')
    let soglas = 'qwrtpsdfghjklzxcvbnm'.split('')

    for (let i = 0; i < leters.length; i++) {
        if (glasny.includes(leters[i].toLowerCase()))
            glasnyRes++
        else if (soglas.includes(leters[i].toLowerCase()))
            soglasnRes++
    }
    console.log('The word ' + word + ' consists of ' + glasnyRes + ' vowels and ' + soglasnRes + ' consonants')
}
word('Check-list')
word('Case')
word('engine')

// Write a function that checks if the word is a palindrome

function isPalindrom(word) {
    let revers = word.split('').reverse('').join('')
    if (word.toLowerCase(') == revers.toLowerCase('))
        console.log('the word is a polynomial')
    else
        console.log('the word is NOT a polyandromic')
}
isPalindrom('abba')
isPalindrom('abba')
isPalindrom('sAbba')
