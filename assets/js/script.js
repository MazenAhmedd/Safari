const navMenu = document.getElementById("nav-list");
const menu = document.getElementById("menu");

if(menu) {
    menu.addEventListener('click', () => {
        navMenu.classList.toggle("show-menu");
        menu.classList.toggle("close")
    })
}






let section = document.querySelectorAll("section");
let navlink = document.querySelectorAll("header div ul li a");

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top > offset && top < offset + height) {
            navlink.forEach(links => {
                links.classList.remove("active")
                document.querySelector('header div ul li a[href*='+id+']').classList.add("active")
            })
        }
    })
}