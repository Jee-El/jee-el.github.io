// Hamburger menu stuff
const navLinksMobile = document.querySelector('.nav-links');
const btnCancel = document.querySelector('.icon-cancel');
const navList = document.querySelectorAll('.nav-links > *');
const toggleBtn = document.querySelector('.icon-menu');
toggleBtn.addEventListener('click', (e) => {
	btnCancel.classList.add('active');
	navLinksMobile.classList.add('active');
});
navList.forEach((item) =>
	item.addEventListener('click', () => {
		btnCancel.classList.remove('active');
		navLinksMobile.classList.remove('active');
	})
);

// Form validation
const formInputs = {
	fullName: document.querySelector(`#name`),
	email: document.querySelector(`#email`),
	message: document.querySelector(`#message`),
};
const regex = {
	name: /^[a-z]+$/i,
	email: /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
	message: /.+/i,
};
// Validate form while user is typing
for (let input in formInputs) {
	formInputs[input].addEventListener(`input`, (e) => {
		if (regex[formInputs[input].id].test(e.target.value)) {
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
		if (!regex[formInputs[input].id].test(formInputs[input].value)) {
			formInputs[input].className = `invalid`;
			e.preventDefault();
		}
	}
	form.reset();
});
