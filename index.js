function swapImage(imageId) {
    const imageMap = {
        'img1': 'elementor-placeholder-image1.jpg',
        'img2': 'elementor-placeholder-image2.png',
        'img3': 'elementor-placeholder-image3.jpg',
        'img4': 'elementor-placeholder-image4.png'
    };
    document.getElementById('mainImage').src = imageMap[imageId];
}

function homeButton() {
    const element = document.querySelector('.wrapper');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Target element not found');
    }
}   
function aboutButton() {
    const element = document.querySelector('.below-content');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Target element not found');
    }
}   
function contactButton() {
    const element = document.querySelector('.contact-info');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Target element not found');
    }
}   
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) { 
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElement = document.querySelectorAll('.hidden')
hiddenElement.forEach((el) => observer.observe(el));
