const bannerImg = document.querySelector('.banner');
bannerImg.style.backgroundImage = 'url(img/hero.webp)'
const btnLogin = document.querySelector('.login');
btnLogin.addEventListener('click', ()=>{
    window.location.replace("login.html");
})