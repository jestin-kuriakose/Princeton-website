function mobileMenu () {
    const menu = document.getElementById('menu')
    if(menu.style.display == 'none') {
        menu.style.display = 'grid'
        menu.style.width = '100%'
        document.getElementById('mobile-menu-open').style.display = 'none'
        document.getElementById('navbar__logo').style.display = 'none'
        document.getElementById('hero').style.display = 'none'
    }else {
        menu.style.display = 'none'
    }
}
