const sliderContainer = document.querySelector('.slider-container')
const slideSelectors = document.querySelector('.slide-selectors')
let selectorCircle


const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')

const slides = document.querySelectorAll('.slide')
let currentSlide  = 100*slides.length;

slides.forEach(slide => {
    selectorCircle = document.createElement('div')
    selectorCircle.classList.add('circle')
    slideSelectors.appendChild(selectorCircle)
    
});


const removeClasses = () => {
    slides[currentSlide % slides.length].classList.remove('active')
    slides[(currentSlide + 1) % slides.length].classList.remove('from-right')
    slides[(currentSlide -1) % slides.length].classList.remove('from-left')
    circleBtns[currentSlide % slides.length].classList.remove('active-circle')
}

const addClasses = () => {
    slides[currentSlide % slides.length].classList.add('active')
    slides[(currentSlide + 1) % slides.length].classList.add('from-right')
    slides[(currentSlide -1) % slides.length].classList.add('from-left')
    circleBtns[currentSlide % slides.length].classList.add('active-circle')
}



circleBtns = document.querySelectorAll('.circle')
circleBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        
        removeClasses();
        currentSlide = i + 100*slides.length
        addClasses();
    })
})

slideSelectors.appendChild(selectorCircle)
slideSelectors.appendChild(selectorCircle)
slideSelectors.appendChild(selectorCircle)

addClasses();

rightArrow.addEventListener('click', () => {

    removeClasses();
    currentSlide ++;
    addClasses();

})

leftArrow.addEventListener('click', () => {

    removeClasses();
    currentSlide --;
    addClasses();
})


setInterval(() => {
    removeClasses();
    currentSlide ++;
    addClasses();
    autoSlide()

}, 2000);
