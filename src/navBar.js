//  Nav Toggle  Save to Setting statusto openor close
function navBar_Open() {

    const target = document.querySelector('.grid-container')
    const btn = document.querySelector('.nav_toggle')
    const nav = document.querySelector('nav.nav')

    // LocalStorage
    let navActive = localStorage.getItem('navActive')
    const enableNavActive = () => {
        localStorage.setItem('navActive', 'enable')
        target
            .classList
            .add('active_navBar')
        nav
            .classList
            .add('min_nav')
    }
    const disableNavActive = () => {
        localStorage.setItem('navActive', null)
        target
            .classList
            .remove('active_navBar')
        nav
            .classList
            .remove('min_nav')
    }
    if (navActive === "enable") {
        enableNavActive()
    } else {
        disableNavActive()
    }

    btn.addEventListener('click', () => {
        if (target.classList.contains('active_navBar')) {
            target
                .classList
                .remove('active_navBar')
            nav
                .classList
                .remove('min_nav')
        } else {
            target
                .classList
                .add('active_navBar')
            nav
                .classList
                .add('min_nav')
        }
        // LocalStorage
        navActive = localStorage.getItem('navActive')
        if (navActive !== 'enable') {
            enableNavActive()
        } else {
            disableNavActive()
        }
    })
}

window.onload = navBar_Open