
const themeButton = document.getElementById('theme-btn')


themeButton.addEventListener('click', () => {

    const currentColor = document.body.style.backgroundColor;

    if (!currentColor || currentColor === 'white') {
        document.body.style.backgroundColor = "black"
        themeButton.innerHTML = "white"
    } else {
        document.body.style.backgroundColor = "white"
        themeButton.innerHTML = "black"
    }
})