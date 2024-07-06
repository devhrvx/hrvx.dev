function openNav() {
    document.querySelector('#nav').style.width = '250px';
    document.querySelector('.nav').style.paddingLeft = '10px';
    document.querySelector('.all').classList.add('blur');
    document.querySelector('#logo').classList.add('blur');
    document.querySelector('.open-btn').classList.add('blur');
    document.addEventListener('click', outsideClickListener);
}

function closeNav() {
    document.querySelector('#nav').style.width = '0';
    document.querySelector('.nav').style.paddingLeft = '0';
    document.querySelector('.all').classList.remove('blur');
    document.querySelector('#logo').classList.remove('blur');
    document.querySelector('.open-btn').classList.remove('blur');
    document.removeEventListener('click', outsideClickListener);
}

function outsideClickListener(event) {
    const nav = document.querySelector('#nav');
    const openBtn = document.querySelector('.open-btn');
    if (!nav.contains(event.target) && !openBtn.contains(event.target)) {
        closeNav();
    }
}

function redirHome() {
    window.location.href = '/index.html';
}

