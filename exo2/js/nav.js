//fonctionnalité de la nav
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('#main-nav');

    //ajout des liens des differentes pages
    nav.innerHTML = `
        <a href="index.html">Accueil</a>
        <a href="elements.html">Elements</a>
        <a href="zoo.html">Zoo</a>
        <a href="feutres.html">Feutres</a>
        <a href="planetes.html">Planetes</a>
    `;

    //la page active doit marqué  avec un style
    const currentPage = window.location.pathname.split("/").pop();

    //mettre en rouge la page active
    const links = document.querySelectorAll("#main-nav a");

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.color = "red";
        }
    });

});