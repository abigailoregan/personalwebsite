function toggleMobileMenu() {
    if(document.getElementById('nav_buttons_mobile').classList.contains('flex')) {
        document.getElementById('nav_buttons_mobile').classList.remove('flex')
        document.getElementsByClassName('content')[0].classList.remove('disabled')
    }
    else {
        document.getElementById('nav_buttons_mobile').classList.add('flex')
        document.getElementsByClassName('content')[0].classList.add('disabled')
    }
}

function toggleExpand(id) {
    if(id.includes('art')) {
        if(document.getElementById(`${id}`).classList.contains('expand')) {
            document.getElementById(`${id}`).classList.remove('expand')
        }
        else {
            document.getElementById(`${id}`).classList.add('expand')
        }
    }
    else {
        if(document.getElementById(`${id}`).classList.contains('expand2')) {
            document.getElementById(`${id}`).classList.remove('expand2')
        }
        else {
            document.getElementById(`${id}`).classList.add('expand2')
        }
    }
}