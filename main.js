const navItems = document.querySelector('.nav__items');
const openNavButton = document.querySelector('#open__nav-btn');
const closeNavButton = document.querySelector('#close__nav-btn');

// open dropdown
const openNav = () => {
    navItems.style.display = 'flex';
    openNavButton.style.display = 'none';
    closeNavButton.style.display = 'inline-block';
}

//close dropdown
const closeNav = () => {
    navItems.style.display = 'none';
    closeNavButton.style.display = 'none';
    openNavButton.style.display = 'inline-block';
}

openNavButton.addEventListener('click', openNav);
closeNavButton.addEventListener('click', closeNav);



const sidebar = document.querySelector('aside');
const showSidebarBtn = document.querySelector('#show__sidebar-btn');
const hideSidebarBtn = document.querySelector('#hide__sidebar-btn');
//show sidebar on small devices
const showSidebar = () => {
    sidebar.style.left = '0';
    showSidebarBtn.style.display = 'none';
    hideSidebarBtn.style.display = 'inline-block';
}

//hide sidebar on small devices
const hideSidebar = () => {
    sidebar.style.left = '-100%';
    showSidebarBtn.style.display = 'inline-block';
    hideSidebarBtn.style.display = 'none';
}

showSidebarBtn.addEventListener('click', showSidebar);
hideSidebarBtn.addEventListener('click', hideSidebar);