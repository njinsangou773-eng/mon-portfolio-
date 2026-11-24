// Message de bienvenue

console.log("Bienvenue sur PACHA CODE !");

// Animation au clic

function bienvenue() {
    alert("Bienvenue dans mon portfolio ! Je suis Pacha, développeur web en formation.");
}

// Afficher la date

const annee = new Date().getFullYear();

document.getElementById("annee").textContent = annee;

// Animation d'apparition

window.addEventListener("load", function() {
    document.body.style.opacity = "1";
});