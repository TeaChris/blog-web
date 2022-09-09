const navItems = document.querySelector('.nav_items')
const openNavBtn = document.querySelector('#open_nav-btn')
const closeNavBtn = document.querySelector('#close_nav-btn')


// opens Nav Menu
const openNav = () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

// closes Nav Menu
const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav)



// sidebar buttons
const sideBar = document.querySelector('aside');
const showSidebarBtn = document.querySelector('#show_sidebar-btn');
const hideSideBarBtn = document.querySelector('#hide_sidebar-btn');

// show sidebar on small devices
const showSideBar = () => {
    sideBar.style.left = '0';
    showSidebarBtn.style.display = 'none';
    hideSideBarBtn.style.display = 'inline-block';
}
// hide sidebar on small devices
const hideSideBar = () => {
    sideBar.style.left = '-100%';
    showSidebarBtn.style.display = 'inline-block';
    hideSideBarBtn.style.display = 'none';
}


showSidebarBtn.addEventListener('click', showSideBar);
hideSideBarBtn.addEventListener('click', hideSideBar);