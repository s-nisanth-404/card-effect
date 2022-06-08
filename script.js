const container = document.querySelector('.container');
const card = document.querySelector('.card');

const img = document.querySelector('.shoe_img');
const title = document.querySelector('.heading');
const description = document.querySelector('.content');
const size = document.querySelector('.size');
const purchase = document.querySelector('.Purchase');

container.addEventListener('mousemove', (e) => {
    let XAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let YAxis = (window.innerHeight / 2 - e.pageY) / 25;

    card.style.transform = `rotateX(${YAxis}deg) rotateY(${XAxis}deg)`;
});

container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';

    img.style.transform = 'translateZ(200px) rotate(-45deg)';
    title.style.transform = 'translateZ(150px)';
    description.style.transform = 'translateZ(150px)';
    size.style.transform = 'translateZ(100px)';
    purchase.style.transform = 'translateZ(100px)'; 
});

container.addEventListener('mouseleave', (e) => {

    card.style.transition = 'all 1s ease';

    card.style.transform = 'rotateX(0deg) rotateY(0deg)';

    title.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    img.style.transform = 'translateZ(0px) rotate(0deg)';
    size.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)'; 
});