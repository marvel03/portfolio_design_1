let ham_menu = document.querySelector(".menu-icon")
ham_menu_toggle = false;
ham_menu.addEventListener('click', () => {
    toggleMenuIcon();
    ham_menu_toggle = !ham_menu_toggle;
})
function toggleMenuIcon() {

    if (!ham_menu_toggle) {
        ham_menu.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    } else {
        ham_menu.innerHTML = '<i class="fa-solid fa-bars"></i>'
    }
    let menu = document.querySelector(".menu");
    menu.classList.toggle('open')

}