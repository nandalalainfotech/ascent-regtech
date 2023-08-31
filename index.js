const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

const gif = document.querySelector(".nectar-video-self-hosted");
const vedio = document.querySelector(".vedio");
gif.addEventListener('click'),() =>{
    vedio('play')
}
vedio.addEventListener('click') ,() =>{
    gif('play')
}
// first div scroll animation
