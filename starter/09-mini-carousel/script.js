/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 9 : 
Au clic sur le bouton, change la source de l'image par celle de l'image suivante dans le tableau <strong>gallery</strong>. Fais-en une boucle.
*/
/* 
AIDE : voici les étapes :
1. On initialise un index
2. On recherche l'élément img
3. On associe image aux éléments du tableau (suivant le numéro d'index)
4. On incrémente l'index de 1 pour faire défiler les images
5. En fin de longueur du tableau, on redémarre au début de l'index
*/

const gallery = ['bell.svg','clock.svg', 'compass.svg', 'kiss.svg', 'kiss-wink-heart.svg', 'lemon.svg', 'map.svg'];
let imgI = 0;

document.querySelector('.material .actions').addEventListener('click', () => {
    if (imgI > gallery.length-2) {
        imgI = 0;
    } else {
        imgI++;
    }
    document.querySelector('img').src = `./img/${gallery[imgI]}`;
});