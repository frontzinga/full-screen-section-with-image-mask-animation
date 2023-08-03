document.addEventListener('DOMContentLoaded', () => {

    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const button = section.querySelector('button');
        const close = section.querySelector('.close');

        button.addEventListener('click', () => {
            document.body.style.overflow = 'hidden';
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth',
            })
            section.classList.add('transition', 'animate');
            setTimeout(() => {
                section.classList.add('animate-completed');
            }, 1000)
        });

        close.addEventListener('click', () => {
            document.body.style.overflow = 'auto';
            section.classList.remove('animate-completed');
            setTimeout(() => {
                section.classList.remove('animate');
            }, 100);
        });
    })

    

});