import Scrollbar from 'smooth-scrollbar';
import createScrollSnap from 'scroll-snap'

let body = document.querySelector('body');
let s = Scrollbar.init(body);
let two = document.getElementById('two');
let snapped = false;
s.addListener(() => {

    reveal();
    observer.observe(two);

});

let observerConfig = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};
let observer = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting && entries[0].intersectionRatio != 1) {
        s.scrollIntoView(two);
    }


}, observerConfig)

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(element => {
        if (s.isVisible(element)) {
            element.classList.add('active');
        }
    })
}

let btn = document.getElementById('goToWork');
btn.addEventListener('click', () => {
    let workArea = document.getElementById('work');
    s.scrollTo(0, workArea.getBoundingClientRect().top, 1000, 'easeInSine');

})








//for tablet & mobile view only
if (window.innerWidth <= 768) {
    s.destroy();

    let observerConfig = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    };
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (window.innerWidth <= 500 && entry.intersectionRatio < 1) {
                    entry.target.classList.add('slide')
                } else {
                    entry.target.classList.add('active')
                }
            }
        })
    }, observerConfig)



    const slides = document.querySelectorAll('.reveal');

    slides.forEach(slide => {
        observer.observe(slide);
    })


    let btn = document.getElementById('goToWork');
    btn.addEventListener('click', () => {
        let workArea = document.getElementById('work');
        btn.href = '#work';

    })


}



window.addEventListener('DOMContentLoaded', () => {
    //handle change of color theme
    let themeBtn = document.getElementById('colorTheme');

    themeBtn.addEventListener('click', () => {
        let htmlElement = document.querySelector('html');

        if (htmlElement.getAttribute('data-theme') === "light") {
            htmlElement.setAttribute('data-theme', "dark");
            themeBtn.classList.add('dark')
        } else {
            htmlElement.setAttribute('data-theme', "light");
            themeBtn.classList.remove('dark')
        }
    })
})