document.getElementsByName('current-year').forEach(element => {
    element.innerText = new Date().getFullYear();
});

const header = document.querySelector('.top-panel');

if (header) {
    const updateHeaderOffset = () => {
        const offset = Math.ceil(header.getBoundingClientRect().bottom + 16);
        document.documentElement.style.setProperty('--header-offset', `${offset}px`);
    };

    new ResizeObserver(updateHeaderOffset).observe(header);
    window.addEventListener('resize', updateHeaderOffset);
    updateHeaderOffset();
}
