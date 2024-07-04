console.log('ma web-app')

// querySelector -> button
// querySelector -> body

const btn = document.querySelector(".btn-change")
const body = document.querySelector("body")
const modify = document.querySelectorAll(".to-modify")
const result = document.querySelector(".result-addition")

// implémenter une boucle pour remettre les 3 nombres à 0 dans le body .to-modify à la premiere lecture du script
console.log(modify)
for (let i = 0; i < modify.length; i++) {
    // Générer un nombre aléatoire entre 0 et 20
    modify[i].textContent = Math.floor(Math.random() * 20)

}
// assigner à "result" la valeur de la somme totale "modify"   

let total = modify[0] + modify[1] + modify[2]
for (let i = 0; i < modify.length; i++) {
    result.textContent = total
}


// ajouter un événement sur le bouton
// btn.addEventListener("click", changeColor)

function changeColor() {
    console.log("click")
    
    // on change de façon aléatoire la couleur du body
    body.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
}