document.addEventListener('DOMContentLoaded', function () {
    const firstName = document.querySelector('.first-name');
    const lastName = document.querySelector('.last-name');
    const status = document.querySelector('.status');
    const parentNila = document.querySelector('.parent-nila');
   
    firstName.addEventListener('animationend', function () {
        if (event.animationName === 'typing') {
            firstName.classList.add('finished');
            lastName.classList.add('typing');
        }
    });

    lastName.addEventListener('animationend', function () {
        if (event.animationName === 'typing') {
            status.classList.add('finished-a');
            parentNila.classList.add('finished-a');
        }
    });
});


const url = 'https://github.com/devhrvx';

function toGitHub() {
    window.open(url, '_blank').focus();
}