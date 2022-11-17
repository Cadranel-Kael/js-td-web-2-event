/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 4 : Change couleur (1)
Au clic sur un des boutons, colorie la page dans la couleur choisie par l'utilisateur.
*/

const buttons = document.querySelectorAll('.actions button');

for (const button of buttons) {
    button.addEventListener('click', (event) => {
            document.body.style.background = event.currentTarget.id;
        }
    )
}



