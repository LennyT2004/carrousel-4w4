(function(){
    let carrousel = document.querySelector('.carrousel')
    let bouton = document.querySelector('.bouton_ouvrir')
    let carrousel_x = document.querySelector('.carrousel_x')
    let carrousel_figure = document.querySelector('carrousel_figure')

    let galerie = document.querySelector('.galerie')
    let carrousel_img = document.createElement('img')
    carrousel_img.classList.add('carrousel_img')
    let galerie_img = galerie.querySelector('img')
    carrousel_img.src = galerie_img.src


    bouton.addEventListener('mousedown', function(){
        carrousel.classList.add('carrousel-ouvrir')
    })

    carrousel_x.addEventListener('mousedown', function(){
        carrousel.classList.remove('carrousel-ouvrir')
    })
})()