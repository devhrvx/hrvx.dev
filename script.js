function openNav() {
    document.querySelector('#nav').style.width = '250px';
    document.querySelector('.nav').style.paddingLeft = '10px';
    document.querySelector('.all').classList.add('blur');
    document.querySelector('#logo').classList.add('blur');
    document.querySelector('.open-btn').classList.add('blur');
}

function closeNav() {
    document.querySelector('#nav').style.width = '0';
    document.querySelector('.nav').style.paddingLeft = '0';
    document.querySelector('.all').classList.remove('blur');
    document.querySelector('#logo').classList.remove('blur');
    document.querySelector('.open-btn').classList.remove('blur');
}
const all = document.querySelector('.blur'):

function redirHome() {
    window.location.href = 'index.html';
}

all.addEventListener("click", closeNav());
