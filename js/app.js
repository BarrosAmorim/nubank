const scrollHeader = () => {
    const nav = document.getElementById('header')
    this.scrollY >= 50 ? nav.classList.add('active-header') : nav.classList.remove('active-header')
}

window.addEventListener('scroll', scrollHeader)

