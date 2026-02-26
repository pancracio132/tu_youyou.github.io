const contents = document.querySelectorAll('.content');

function showOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    contents.forEach(content => {
        const boxTop = content.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            content.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showOnScroll);
showOnScroll();
