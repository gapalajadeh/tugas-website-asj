// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#Hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

//kilik diluar siderbar
const Hamburger = document.querySelector('#Hamburger-menu')

document.addEventListner('click', function(e) {
	if (!Hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove('active');
	}
})




















