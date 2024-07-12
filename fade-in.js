document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                setTimeout(() => {
                    entry.target.classList.add('start');
                }, 500);
                observer.unobserve(entry.target);
            }
        });
    });

    const elements = document.querySelectorAll('.fade-in-on-scroll');
    elements.forEach(element => {
        observer.observe(element);
    });
});
