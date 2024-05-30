(function () {
    let carrousel = document.querySelector('.carrousel')
    let bouton = document.querySelector('.bouton__ouvrir')
    let carrousel__x = document.querySelector('.carrousel__x')
    let galerie = document.querySelector('.galerie')


    let carrousel__figure = document.querySelector('.carrousel__figure')


    /* récupère la première image de la galerie */
    /* pour créer une collection d'images de la galerie */
    let galerie__img = galerie.querySelectorAll('img')

    let index = 0
    for (const elm of galerie__img) {
        creer_image_carrousel(index, elm)
        creer_radio_carrousel(index)
        index = index + 1
    }

    /**
     * Créer l'image du carrousel à partir de la galerie
     * @param {*} index  le numéro de l'image
     * @param  elm l'élément image de la galerie
     */
    function creer_image_carrousel(index, elm) {
        console.log(elm.src)
        /* Création dynamique d'une image du carrousel */
        let carrousel__img = document.createElement('img')
        carrousel__img.src = elm.src
        carrousel__img.classList.add('carrousel__img')
        carrousel__img.dataset.index = index
        carrousel__figure.appendChild(carrousel__img)
    }

    /**
     * Création d'un radio bouton du carrousel
     * @param {*} index  le numéro du radio
     */
    function creer_radio_carrousel(index) {
        let carrousel__form = document.querySelector('.carrousel__form')
        let carrousel_radio = document.createElement('input');
        // class
        carrousel_radio.classList.add('carrousel_radio');
        // index
        carrousel_radio.dataset.index = index;
        // type
        carrousel_radio.type = 'radio';
        // name
        carrousel_radio.name = 'imageRadio';
        // ajouter dans carrousel__form
        carrousel__form.appendChild(carrousel_radio);
        // ajouter un écouteur qui permettra de changer l'opacité de l'image « index »
        carrousel_radio.addEventListener('click', function () {
            let index = this.dataset.index;
            let carrousel__imgs = carrousel__figure.children;
            for (const img of carrousel__imgs) {
                img.style.opacity = 0;
                img.classList.remove('scale-up');
                img.classList.add('scale-down');
            }
            carrousel__imgs[index].style.opacity = 1;
            carrousel__imgs[index].classList.remove('scale-down');
            carrousel__imgs[index].classList.add('scale-up');
        });
    }

    /* écouteur pour ouvrir la boîte modale */
    bouton.addEventListener('click', function () {
            carrousel.classList.add('carrousel--ouvrir') // ouvrir le carrousel
        })
    /* Écouteur pour fermer la boîte modale */
    carrousel__x.addEventListener('click', function () {

            carrousel.classList.remove('carrousel--ouvrir') // fermer le carrousel
        })
}) ()