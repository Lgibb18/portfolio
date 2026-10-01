document.getElementsByName('current-year').forEach(element => {
    element.innerText = new Date().getFullYear();
});