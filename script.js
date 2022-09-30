const data = [
    {
        imageSrc: './images/desktop-image-hero-1.jpg',
        headerText: 'Discover innovative ways to decorate',
        bodyText: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
    },
    {
        imageSrc: './images/desktop-image-hero-2.jpg',
        headerText: 'We are available all across the globe',
        bodyText: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        imageSrc: './images/desktop-image-hero-3.jpg',
        headerText: 'Manufactured with the best materials',
        bodyText: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
    }
]


let menu = document.querySelector('.menu')
let nav = document.querySelector('nav')
let links = document.querySelectorAll('li')
let overlay = document.querySelector('.overlay')

let heroImage = document.querySelector('.hero-image img')
let heroHeader = document.querySelector('.hero-header')
let herobody = document.querySelector('.hero-body')


let rightArrow = document.querySelector('.right-arrow')
let leftArrow = document.querySelector('.left-arrow')

let slideIndex = 0

// nav things
menu.addEventListener('click',()=>{
    nav.classList.toggle('show')
})

links.forEach(link=>{
    link.addEventListener('click',close)
})

overlay.addEventListener('click',close)

function close(){
    nav.classList.remove('show')
}


// slide things
rightArrow.addEventListener('click',()=>{
    slideIndex+=1
    changeData()
})

leftArrow.addEventListener('click',()=>{
    slideIndex-=1
    changeData()
})

function changeData(){
    if(slideIndex > data.length-1){
        slideIndex = 0
    }else if(slideIndex < 0){
        slideIndex = data.length - 1
    }
    heroImage.src = data[slideIndex].imageSrc
    heroHeader.textContent = data[slideIndex].headerText
    herobody.textContent = data[slideIndex].bodyText
}