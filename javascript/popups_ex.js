const spuk2023 = {
    name: 'spukhaus2023',
    paths: [
        '../hiRez/exhibitions/spukhaus2023_artists.jpg',
        '../hiRez/exhibitions/spukhaus2023_widewall.jpg',
        '../hiRez/exhibitions/spukhaus2023_wall.jpg',
        '../images/exhibitions/spukhaus2023_play.jpg',
        '../hiRez/figures/abigail_siren.jpg',
        '../hiRez/exhibitions/spuk_poster.jpg'
    ],
    descs: [
        'Group Photo of Participating Artists',
        'Panoramic of Exhibition Wall',
        'The Siren, Print',
        'Horror Short Film (Co-Creator: Alyson Kentner), Runitime: 4min',
        'The Siren, digital drawing on Photoshop, 9000x6600px',
        'Spukhaus 2023 Poster'
    ],
    final: 5
}

const afo2024 = {
    name: 'afo2024',
    paths: [
        '../hiRez/exhibitions/afo2024_exhibition.jpg',
        '../hiRez/portraits/abigail_self2.jpg',
        '../hiRez/exhibitions/afo_poster.jpg'
    ],
    descs: [
        'Photo of Exhibition Display',
        'Abigail O\'Regan, Acrylic on Wood Panel, 40"x30"',
        'AFO CONTENT 2024 Poster'
    ],
    final: 2
}

const papr2025 = {
    name: 'papr2025',
    paths: [
        '../hiRez/exhibitions/salon_im1.jpg',
        '../hiRez/exhibitions/salon_im2.jpg',
        '../hiRez/abstract/abigail_flowers.jpg',
        '../hiRez/exhibitions/2025paprposter.jpg'
    ],
    descs: [
        'Photo of Exhibition Display #2',
        'Photo of Exhibition Display #1',
        'Flowers, Oil on canvas, 24”x36”',
        '2025 Painting + Printmaking Spring Salon Show Poster'
    ],
    final: 3
}

const srisaA = {
    name: 'srisaA',
    paths: [
        '../images/exhibitions/srisa_sA_wide.jpg',
        '../images/exhibitions/srisa_sA_watercolour.jpg',
        '../images/exhibitions/srisa_sA_wall.jpg',
        '../images/exhibitions/srisa_sA_abigail.jpg'
    ],
    descs: [
        'Photo of the exhibition',
        'Photo of the watercolor paintings at the exhibition',
        'Photo of the main exhibition wall, with three of my artworks',
        'Photo of Abigail O\'Regan at the exhibition'
    ],
    final: 3
}

const srisaB = {
    name: 'srisaB',
    paths: [
        '../images/exhibitions/srisa_sB_sideroom.jpg',
        '../images/exhibitions/srisa_sB_floortile.jpg',
        '../images/exhibitions/srisa_sB_usa.jpg',
        '../images/exhibitions/srisa_sB_guildedwall.jpg'
    ],
    descs: [
        'Photo of the room the art gallery room Abigail was featured in',
        'Photo of abigail\'s Roman floortile artwork',
        'Photo of Abigail\'s guilded artwork of America',
        'Photo of the wall holding all of the guilded mini artworks'
    ],
    final: 3
}

const setList = [ spuk2023, afo2024, papr2025, srisaA, srisaB ]

document.addEventListener('keydown', (e) => {
    if (document.body.classList.contains('disabled')) {
        if (e.key === 'ArrowLeft') {
            moveLeft()
        }
        else if (e.key === 'ArrowRight') {
            moveRight()
        }
    }
})

function getName() {
    return document.getElementById('identifier').getAttribute('name')
}

function getSet(name) {
    return setList.find(artSet => artSet.name === name)
}

function getImage(name) {
    return document.getElementById(`${name}-rotation`)
}

function getDescription(name) {
    return document.getElementById(`${name}-description`)
}

function closePopUp(node) {
    document.body.classList.remove('disabled')
    node.parentNode.classList.add('hide')
}

function openPopUp(image_num) {
    const name = getName()
    document.body.classList.add('disabled')
    const set = getSet(name)
    const image = getImage(name)
    const description = getDescription(name)
    standardMove(image_num, image, description, set)
    document.getElementById(`${name}-popup`).classList.remove('hide')
}

function moveRight() {
    const name = getName()
    const set = getSet(name)
    const image = getImage(name)
    const description = getDescription(name)
    const next = Number(image.getAttribute('current'))-1
    
    if (set.paths[next] === undefined) {
        // go to last item
        standardMove(set.final, image, description, set)
        return
    }
    // go to next item
    standardMove(next, image, description, set)
}

function moveLeft() {
    const name = getName()
    const set = getSet(name)
    const image = getImage(name)
    const description = getDescription(name)
    const next = Number(image.getAttribute('current'))+1
    
    if (set.paths[next] === undefined) {
        // go to item 0
        standardMove(0, image, description, set)
        return
    }
    // go to next item
    standardMove(next, image, description, set)
}

function standardMove(next, image, description, set) {
    image.setAttribute('current', next)
    image.src = set.paths[next]
    description.innerHTML = set.descs[next]
    if (set.paths[next] === '../images/exhibitions/spukhaus2023_play.jpg') {
        image.setAttribute('onclick', 'window.open(`https://www.youtube.com/watch?v=uyAAM00vIRg`)')
        image.classList.add('isclickable')
    }
    else {
        image.setAttribute('onclick', '')
        image.classList.remove('isclickable')
    }
}