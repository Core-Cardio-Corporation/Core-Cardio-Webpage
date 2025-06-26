let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slides.length > 0) {
        slides[slideIndex - 1].style.display = "block";
    }
    setTimeout(showSlides, 2000);
}

let slideIndex2 = 0;
showSlides2();

function showSlides2() {
    const slides2 = document.getElementsByClassName("mySlides2");
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides2.length) { slideIndex2 = 1; }
    if (slides2.length > 0) {
        slides2[slideIndex2 - 1].style.display = "block";
    }
    setTimeout(showSlides2, 2000);
}