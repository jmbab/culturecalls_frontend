
function widthCheck() {
    let query = window.matchMedia("(min-width: 1024px)");
    const navbar = document.getElementById('navbar');
    const navbarpc = document.getElementById('navbarpc');
    const about = document.getElementById('about')
    const aboutpc = document.getElementById('aboutpc')

    if (query.matches) {
        navbar.classList.add('sticky-top');
        navbar.style.fontSize
        navbar.hidden = true
        about.hidden = true

    } else {
        navbar.classList.add('fixed-bottom');
        navbarpc.hidden = true
        aboutpc.hidden = true

    }
}
