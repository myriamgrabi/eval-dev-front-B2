// generer des noms aléatoirement
const noms = [
    "Harry", "Hermione", "Ron", "Draco", "Luna",
    "Neville", "Ginny", "Cedric", "Cho", "Fred", "George"
];

let eleveActuel = null;

//generer un nouvel élève à chaque click
document.getElementById("nouvelEleve").onclick = function () {

    //placé les élèves 1 par 1
    if (eleveActuel !== null) {
        alert("Il faut d'abord répartir l'élève précédent !");
        return;
    }


    let index = Math.floor(Math.random() * noms.length);
    eleveActuel = noms[index];

    document.getElementById("eleveActuel").textContent =
        "Élève actuel : " + eleveActuel;

}

document.getElementById("choixpeau").onclick = function () {

    if (eleveActuel === null) {
        alert("Génère d'abord un élève !");
        return;
    }

    const maisons = ["gryffondor", "serdaigle", "poufsouffle", "serpentard"];

    let index = Math.floor(Math.random() * maisons.length);
    let maisonChoisie = maisons[index];

    let li = document.createElement("li");
    li.textContent = eleveActuel;

    document.getElementById(maisonChoisie).appendChild(li);

    eleveActuel = null;

    document.getElementById("eleveActuel").textContent =
        "Élève actuel : aucun";

}