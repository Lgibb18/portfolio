document.getElementsByName('current-year').forEach(element => {
    element.innerText = new Date().getFullYear();
});

const header = document.querySelector('.top-panel');

if (header) {
    const updateHeaderOffset = () => {
        const offset = Math.ceil(header.offsetTop + header.offsetHeight + 16);
        document.documentElement.style.setProperty('--header-offset', `${offset}px`);
    };

    new ResizeObserver(updateHeaderOffset).observe(header);
    window.addEventListener('resize', updateHeaderOffset);
    updateHeaderOffset();

    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const scrollY = Math.max(window.scrollY, 0);

        if (scrollY <= 16 || scrollY < lastScrollY - 12) {
            header.classList.remove('is-hidden');
        } else if (scrollY > header.offsetHeight + 40 && scrollY > lastScrollY + 12) {
            header.classList.add('is-hidden');
        }

        if (Math.abs(scrollY - lastScrollY) > 12) {
            lastScrollY = scrollY;
        }
    }, { passive: true });

    header.addEventListener('focusin', () => header.classList.remove('is-hidden'));
}
