/*--------------------------------------------------------------
-----------------------  FICHIER PLAY --------------------------
----------------------------------------------------------------
*/
 
const ROWS = 3;
const COLUMNS = 4
let tableauImages = new Array(ROWS * COLUMNS);
const nbImages = ROWS * COLUMNS / 2;
 
let mytable = document.getElementById("gameTable");
 
//tableau pour stocker les cartes retournées
let carteRetournee = [];
// compteur de paires trouvées
let pairesTrouvees = 0;
 
// compter le nombre de coup
let count = 0;
 
// sert a stocker image dans tableau
function generationTableauImges() {
    for (let i = 0; i < nbImages; i++) {
        let rand = Math.floor(Math.random() * ROWS * COLUMNS);
        while (tableauImages[rand] != undefined) {
            rand = Math.floor(Math.random() * ROWS * COLUMNS);
        }
        tableauImages[rand] = (i + 1);
 
        while (tableauImages[rand] != undefined) {
            rand = Math.floor(Math.random() * tableauImages.length);
        }
        tableauImages[rand] = (i + 1);
    }
}
 
function createTableau() {
 
    for (let i = 0; i < ROWS; i++) {
        let tr = document.createElement('tr');
 
        for (let j = 0; j < COLUMNS; j++) {
            let td = document.createElement('td');
            let img = document.createElement('img');
 
            img.setAttribute("src", "img/question.svg")
            img.setAttribute("id", (i * (ROWS + 1) + j + 1));
 
            td.appendChild(img);
            tr.appendChild(td);
 
        }
 
        mytable.appendChild(tr);
    }
 
}
 
function gestionEvent(event) {
    let image = event.target;
    let idImage = image.getAttribute("id");
    let id = idImage - 1;
    // console.log(id);
 
    if (carteRetournee.includes(id) || tableauImages[id] === 0) {
        return;
    }
    // ajout de l'id
    carteRetournee.push(id);
    image.classList.add("flipped");
 
    image.setAttribute("src", "img/memoryLegume/" + tableauImages[id] + ".svg");
 
    if (carteRetournee.length === 2) {
        const [id1, id2] = carteRetournee;
        count++;
        if (tableauImages[id1] === tableauImages[id2]) {
            tableauImages[id1] = 0;
            tableauImages[id2] = 0;
 
            // Supprime les classes flipped et ajoute la classe matched pour les paires trouvées
            document.getElementById(id1 + 1).classList.add("matched");
            document.getElementById(id2 + 1).classList.add("matched");
 
            pairesTrouvees++;
 
        } else {
            // Utilisation de setTimeout pour retourner l'image après X secondes
            setTimeout(() => {
 
                document.getElementById(id1 + 1).setAttribute("src", "img/question.svg");
                document.getElementById(id2 + 1).setAttribute("src", "img/question.svg");
 
                // Retire la classe flipped si la paire n'est pas trouvée
                document.getElementById(id1 + 1).classList.remove("flipped");
                document.getElementById(id2 + 1).classList.remove("flipped");
               
 
               
 
 
            }, 1000);
        }
        carteRetournee = [];
    }
 
    if (pairesTrouvees === nbImages) {
        const p = document.getElementById("Bravo");
        p.innerHTML = "Bravo ! Vous avez gagné !"
    }
 
    document.getElementById("NbTried").textContent = "Number of attempts : " + count;
}
const p = document.getElementById("Bravo");
p.innerHTML = "Tentez de gagner avec le moins d'essais possible.";
 
 
 
createTableau();
generationTableauImges();
 
document.querySelectorAll("img").forEach(img => img.addEventListener("click", gestionEvent));
 
console.log(tableauImages)
 
// barre d'espace pour relancer le jeu
document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        // Réinitialise le jeu en rechargeant la page
        location.reload();
    }
});