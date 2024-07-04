const limit = 50

const arrNames = ["Simon", "Stéphanie", "Jamie", "Hannah", "Stéphanie", "Jamie", "Hannah"]

const people = [
    { name: "Simon", gender: "male" },
    { name: "Stéphane", gender: "male" },
    { name: "Paul", gender: "male" },
    { name: "Mathilde", gender: "female" },
    { name: "Marianne", gender: "female" },
    { name: "Marion", gender: "female" },
    { name: "Louis", gender: "male" },
]

for (let i = 0; i < arrNames.length; i++) {
    console.log(arrNames[i])
}
// 1ere étape, afficher tous les objets du tableau people
for (let i = 0; i < people.length; i++) {
    console.log(people[i].name)
}
// 2eme étape, afficher tous les objets du tableau genre female
for (let i = 0; i < people.length; i++) {
    if (people[i].gender === "female") {
        console.log(people[i].name)
    }
}

// 3eme étape, afficher tous les objets du tableau genre female et de plus de 6 lettres
for (let n = 0; n < people.length; n++) {
    if (people[n].gender === "female" && people[n].name.length <= 6 || people[n].gender === "male" && people[n].name.length > 6) {
        console.log(people[n].name)
    }
}


const habitants = [
    {
        name: "Jacques",
        year: 25,
        town: "Paris"
    },
    {
        name: "Simon",
        year: 70,
        town: "Paris"
    },
    {
        name: "Jeanne",
        year: 12,
        town: "Paris"
    },
    {
        name: "Marianne",
        year: 38,
        town: "Paris"
    },
    {
        name: "Marianne",
        year: 43,
        town: "Bordeaux"
    },
    {
        name: "Paul",
        year: 65,
        town: "Bordeaux"
    },
    {
        name: "Pierre",
        year: 91,
        town: "Bordeaux"
    },
]

// 4eme étape, afficher tous les habitants de Paris
for (let i = 0; i < habitants.length; i++) {
    if (habitants[i].town === "Paris") {
        console.log(habitants[i].name)
    }
}

// 5eme étape, afficher tous les habitants de plus de 60 ans
for (let i = 0; i < habitants.length; i++) {
    if (habitants[i].year >= 60) {
        console.log(habitants[i].name)
    }
}
// 6eme étape, afficher tous les habitants de plus de 60 ans et de Paris
for (let i = 0; i < habitants.length; i++) {
    if (habitants[i].year >= 60 && habitants[i].town === "Paris") {
        console.log(habitants[i].name)
    }
}

// 7eme étape, afficher le nombres de personnes qui ont moins de 40 ans
let count = 0
for (let i = 0; i < habitants.length; i++) {
    if (habitants[i].year < 40) {
        count++
    }
}
console.log(count)

// 8eme étape, afficher le nombres de personnes qui ont moins de 40 ans dans un tableau
let arr = []
for (let i = 0; i < habitants.length; i++) {
    if (habitants[i].year < 40) {
        arr.push(habitants[i].name)
    }
}
console.log(arr)

//9me étape, afficher l'age moyen des habitants de Bordeaux
let sum = 0
let count2 = 0
for (let i = 0; i < habitants.length; i++) {
    if (habitants[i].town === "Bordeaux") {
        sum += habitants[i].year
        count2++
    }
}
console.log(Math.round(sum / count2))

//10eme étape, afficher le résultat de la sum de 25
getSum(12,13)
getSum(142, 53)

function getSum(num1, num2) {
    console.log(num1 + num2)
}

function minusTen(num1, num2) {
    console.log(num1 - num2)
}