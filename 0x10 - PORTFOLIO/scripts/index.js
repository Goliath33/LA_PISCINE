// 1er essai variable en JS //////////////////////////////////////////////////////////////////////////////////////////////////////

//console.log(myName) les variables doivent être déclarée avant d'être appelé
var presentation = "Bonjour, je m'appelle"
var myName = "Chuck "

//myName = myName + "Norris"
myName += "Norris" + ","

var myAge = "36 ans"

//console.log possibilité de mettre de la syntaxe "chaine de caractère" dans la console entre les parenthèses
console.log(presentation, myName, myAge)

//var backticks = ` 
var result = `${presentation} ${myName} ${myAge}`

console.log(result)

const myTown = "Paris"

console.log(myTown)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2e essai variable number en JS ////////////////////////////////////////////////////////////////////////////////////////////////

let myNumber = 7
myNumber += 1

console.log(myNumber)

myNumber -= 8
myNumber *= 3
myNumber /= 2

console.log(myNumber)

result = myNumber % 3

console.log(result)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3e essai variable : les booléens en JS ////////////////////////////////////////////////////////////////////////////////////////

let isAuthorised = true // false

if (isAuthorised) {
    console.log("Vous êtes autorisé à accéder à cette page")
}
else {
    console.log("Vous n'êtes pas autorisé à accéder à cette page")
}
/*-------------------------------------------------------------------------------------------------------------------------------*/
let majority = 18
let age = 18

if (age >= majority) {
    console.log("Vous êtes majeur")
}

else {
    console.log("Vous n'êtes pas majeur")
}
/*-------------------------------------------------------------------------------------------------------------------------------*/

// OPÉRATEURS de COMPARAISON : <, >, <=, >=, ==, ===,!=,!==

if (age = majority) {
    console.log("Vous n'êtes pas mineur")
}

if (age === majority) {
    console.log(`Vous avez ${age}`)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4e essai variable : complexes, les tableaux en JS //////////////////////////////////////////////////////////////////////////////

// LES TABLEAUX ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
console.log(myArray)

// AFFICHE UN ÉLÉMENT D'UN TABLEAU
console.log(myArray[0])

//AFFICHE LA LONGUEUR D'UN TABLEAU
console.log(myArray.length)

// AFFICHE LE DERNIER ÉLÉMENT D'UN TABLEAU
console.log(myArray[myArray.length - 1])

// AFFICHE LES ÉLEMENTS PLACÉS AUX MILIEU DU TABLEAU
console.log(myArray[myArray.length / 2 - 1])    

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5e essai variable : complexes, les objets en JS //////////////////////////////////////////////////////////////////////////////

// OBJET TABLEAUX ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const myObj = {
    name: "Chuck",
    age: 36,
    job: "Web Developer",
    city: "Paris"
}

console.log(myObj)

let result2 = myObj.name + " " + myObj.age + " " + myObj.job + " " + myObj.city

console.log(result2)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*********************************************************************************************************************************/

// OBJET TABLEAUX ////////////////////////////////////////////////////////////////////////////////////////////////////////////////