(function () {
    let carrousel = document.querySelector('.carrousel')
    let bouton = document.querySelector('.bouton__ouvrir')
    let carrousel__x = document.querySelector('.carrousel__x')
    let galerie = document.querySelector('.galerie')

    let carrousel__figure = document.querySelector('.carrousel__figure')

    let galerie__img = galerie.querySelectorAll('img')

    let index = 0
    for (const elm of galerie__img) {
        creer_image_carrousel(index, elm)
        creer_radio_carrousel(index)
        index = index + 1
    }

    // Trigger a click event on the first radio button
    document.querySelector('.carrousel_radio').click();

    function creer_image_carrousel(index, elm) {
        let carrousel__img = document.createElement('img')
        carrousel__img.src = elm.src
        carrousel__img.classList.add('carrousel__img')
        carrousel__img.dataset.index = index
        carrousel__figure.appendChild(carrousel__img)
    }

    function creer_radio_carrousel(index) {
        let carrousel__form = document.querySelector('.carrousel__form')
        let carrousel_radio = document.createElement('input');
        carrousel_radio.classList.add('carrousel_radio');
        carrousel_radio.dataset.index = index;
        carrousel_radio.type = 'radio';
        carrousel_radio.name = 'imageRadio';
        carrousel__form.appendChild(carrousel_radio);
        carrousel_radio.addEventListener('click', function () {
            let index = this.dataset.index;
            let carrousel__imgs = carrousel__figure.children;
            for (const img of carrousel__imgs) {
                img.style.opacity = 0;
            }
            carrousel__imgs[index].style.opacity = 1;
        });
    }

    bouton.addEventListener('click', function () {
        carrousel.classList.add('carrousel--ouvrir')
    })

    carrousel__x.addEventListener('click', function () {
        carrousel.classList.remove('carrousel--ouvrir')
    })
}) ()