window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>0);
});
let scroll=document.querySelector('.wrapper');
