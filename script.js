$(document).ready(function() {
    var currentIndex = 0;
    var images = $('.carousel-image');
    images.hide().first().show(); // Initially hide all images except the first one

    setInterval(function() {
        images.eq(currentIndex).fadeOut(1000, function() { // Fade out current image
            $(this).removeClass('active'); // Remove 'active' class
        });
        currentIndex = (currentIndex + 1) % images.length; // Increment index
        images.eq(currentIndex).fadeIn(1000, function() { // Fade in next image
            $(this).addClass('active'); // Add 'active' class
        });
    }, 3000);
});
