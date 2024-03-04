document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const carouselIndicators = document.querySelectorAll(".carousel-indicators li");
    let currentIndex = 0;
    let intervalId = null; 

    function showSlide(index) {
        carouselItems.forEach(item => item.classList.remove("active"));
        carouselItems[index].classList.add("active");
        carouselIndicators.forEach(indicator => indicator.classList.remove("active"));
        carouselIndicators[index].classList.add("active");
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showSlide(currentIndex);
    }

    function startCarousel() {
        if (!intervalId) {
            intervalId = setInterval(nextSlide, 5000);
        }
    }

    function stopCarousel() {
        clearInterval(intervalId);
        intervalId = null; 
    }

    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', stopCarousel);
    carousel.addEventListener('mouseleave', startCarousel);

    carouselIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    startCarousel();
});
