// //--1--
let h1_h2 = document.querySelectorAll('#object')[0]
var myElements = Array.from(h1_h2.children)

// //--2--
var objet = {
    nom: 'Natchez',
    age: 25,
}
var proprietes = Object.keys(objet)
console.log(proprietes)
var valeur = Object.values(objet)
console.log(valeur)

// //--3--
// proprietes.forEach(element => {
//     console.log(element)
// });

//--4--
valeur.forEach((element,i) => {
    myElements[i].innerHTML = valeur[i]
});

console.log(myElements)

