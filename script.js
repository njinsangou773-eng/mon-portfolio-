// PACHA CODE - JAVASCRIPT

// 1. Animation au chargement

window.addEventListener("load", function() {
    document.body.style.opacity = "1";
});

// 2. Message de bienvenue

function bienvenue() {

    alert(
        "Bienvenue sur PACHA CODE ! 🚀\n\n" +
        "Je suis Pacha, développeur web en formation."
    );

}

// 3. Année automatique

const annee = document.getElementById("annee");

if (annee) {
    annee.textContent = new Date().getFullYear();
}

// 4. Animation des sections

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {
    threshold: 0.15
});

// 5. Observer les éléments

document.querySelectorAll("section").forEach(function(section) {

    section.classList.add("reveal");

    observer.observe(section);

});

console.log("PACHA CODE est opérationnel !");