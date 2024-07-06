document.addEventListener('DOMContentLoaded', function () {
    const firstName = document.querySelector('.first-name');
    const lastName = document.querySelector('.last-name');

   
    firstName.addEventListener('animationend', function () {
        if (event.animationName === 'typing') {
            firstName.classList.add('finished');
            lastName.classList.add('typing');
        }
    });

    const body = document.body;

});
