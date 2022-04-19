const navLinksMobile = document.querySelector('.nav-links-mobile');
const btnCancel = document.querySelector('.icon-cancel');
const navList = document.querySelectorAll('.nav-links-mobile > *');
const toggleBtn = document.querySelector('.icon-menu');
toggleBtn.addEventListener('click', (e) => {
    btnCancel.classList.add('active');
    navLinksMobile.classList.add('active');
})

navList.forEach((item) => item.addEventListener('click', () => {
    btnCancel.classList.remove('active');
    navLinksMobile.classList.remove('active');
}))

