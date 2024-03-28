let lastScrollPosition = 0;

window.addEventListener('scroll', function() {
    const scrollButton = document.getElementById('scrollButton');
    const scrollPosition = window.scrollY;
    const maxPadding = 100;

    // Calculate new padding values based on scroll position
    const paddingVertical = Math.min(10 + scrollPosition / 10, maxPadding);
    const paddingHorizontal = paddingVertical; // Keeping padding the same horizontally

    // Apply padding to the button
    scrollButton.style.padding = `${paddingVertical}px ${paddingHorizontal}px`;

    // Check if the button padding is greater than or equal to 10px to change the background
    if (paddingVertical >= 10) {
        document.body.classList.add('background-change'); // Change body background
    } else {
        document.body.classList.remove('background-change'); // Restore default body background
    }

    // Determine scroll direction
    const scrollDirection = scrollPosition > lastScrollPosition ? 'down' : 'up';
    lastScrollPosition = scrollPosition;

    // If scrolling up and at the top of the page, remove the background change class
    if (scrollDirection === 'up' && scrollPosition === 0) {
        document.body.classList.remove('background-change');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function toggleAnimation() {
        slides.forEach(slide => {
            if (isInViewport(slide)) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    // Initial check
    toggleAnimation();

    // Listen for scroll events
    window.addEventListener('scroll', toggleAnimation);
});


document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.card-ani');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function toggleAnimation() {
        slides.forEach(slide => {
            if (isInViewport(slide)) {
                slide.classList.add('active');
            } 
        });
    }

    // Initial check
    toggleAnimation();

    // Listen for scroll events
    window.addEventListener('scroll', toggleAnimation);
});


document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.heading');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function toggleAnimation() {
        slides.forEach(slide => {
            if (isInViewport(slide)) {
                slide.classList.add('active');
            } else{
                slide.classList.remove('active');
            }
        });
    }

    // Initial check
    toggleAnimation();

    // Listen for scroll events
    window.addEventListener('scroll', toggleAnimation);
});



document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.services');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function toggleAnimation() {
        slides.forEach(slide => {
            if (isInViewport(slide)) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    // Initial check
    toggleAnimation();

    // Listen for scroll events
    window.addEventListener('scroll', toggleAnimation);
});
