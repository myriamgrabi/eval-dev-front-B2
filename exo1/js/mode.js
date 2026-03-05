// Sélectionnez le bouton
const button = document.querySelector('#Button');

// Ajoutez lors de l'évènement "click" au bouton
button.addEventListener('click', () => {
    // Changez la couleur de fond de la page en noir ou blanc selon la couleur actuelle
    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
    } else {
        document.body.style.backgroundColor = 'black';
    }
});

