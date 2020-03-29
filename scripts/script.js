const $menu = document.querySelectorAll('.menu')[0];
const $navBar = document.querySelectorAll('.nav-bar')[0];

$menu.addEventListener('click', toggleMenu, false);

var isOpen = false;

function toggleMenu(){
    if(!isOpen) {
        $navBar.classList.add('menu-opened');
        $menu.firstElementChild.classList.add('close-btn');
        isOpen = true;
    } else {
        $navBar.classList.remove('menu-opened');
        $menu.firstElementChild.classList.remove('close-btn');
        isOpen = false;
    }
}

$navBar.addEventListener('click', navClick, false);

function navClick(evt){
    if(evt.target.tagName == 'A'){
        toggleMenu();
    }
}