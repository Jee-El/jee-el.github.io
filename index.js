// Hamburger menu
const mobileNav = document.querySelector('.mobile-nav');
const menuBtn = document.querySelector('.icon-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links > li');

let menuClasses = ['icon-menu', 'icon-cancel'];
let i = 0;
menuBtn.addEventListener('click', () => {
	mobileNav.classList.toggle('active');
	menuBtn.className = menuClasses[1 - i];
	i = 1 - i;
});

mobileNavLinks.forEach((navLink) => {
	navLink.addEventListener('click', () => {
		mobileNav.classList.remove('active');
		menuBtn.className = menuClasses[0];
		i = 0;
	});
});

// Form validation
const formInputs = {
	name: document.querySelector(`#name`),
	email: document.querySelector(`#email`),
	message: document.querySelector(`#message`),
};
const regex = {
	name: /^(\b[a-z]+\b\s?){1,3}$/i,
	email: /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
	message: /.+/i,
};
// Validate form while user is typing
for (let input in formInputs) {
	formInputs[input].addEventListener(`input`, (e) => {
		if (regex[input].test(e.target.value)) {
			e.target.className = `valid`;
			return;
		}
		e.target.className = `invalid`;
	});
}
// Validate form when it's submitted
const form = document.querySelector(`form`);
form.addEventListener(`submit`, (e) => {
	for (let input in formInputs) {
		if (!regex[input].test(formInputs[input].value)) {
			formInputs[input].className = `invalid`;
			e.preventDefault();
		}
	}
	form.reset();
});
