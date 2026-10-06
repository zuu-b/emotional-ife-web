function showSlide(slideId) {

    // Find the currently visible slide
    const currentSlide = document.querySelector(".slide.active");

    // Find the slide we want to show
    const nextSlide = document.getElementById(slideId);

    // Remove active class
    currentSlide.classList.remove("active");

    // Add active class to new slide
    nextSlide.classList.add("active");
}