
let numAleatoire = Math.random();
let Intervalle = numAleatoire * 500
let Arrondi = Math.round(Intervalle)
console.log(Arrondi)

let count = 0



let saisie = prompt("entre un nombre entre 0 et 500")
saisie = parseInt(saisie);
count++

while (saisie !== Arrondi) {
if (saisie > Arrondi) {
  alert("Erreur, valeur trop grande !");
} else {
  alert("Erreur, valeur trop petite");
}

saisie = prompt("Entrez un nombre entre 0 et 500"); // Récuper le resultat sous forme de chaine de caractère
saisie = parseInt(saisie);
count++
}

alert("Bravo, vous avez trouvé en " + count + " essai(s) !")


