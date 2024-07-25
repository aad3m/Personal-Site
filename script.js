
document.querySelector('.ham-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.button-container').classList.toggle('active');
});


window.addEventListener('load', function() {
    var loadingScreen = document.getElementById('loading-screen');
    var mainContent = document.querySelectorAll('#main-content');

    // Check if the loading screen has been shown before
    if (!sessionStorage.getItem('loadingScreenShown')) {
        // Show the loading screen and set a delay (milliseconds)
        var delay = 2000
        setTimeout(function() {
            loadingScreen.style.display = 'none';
            mainContent.forEach(function(content) {
                content.style.display = 'block';
            });
            document.body.style.overflow = 'auto'; // Allow scrolling after loading is complete

            // Set a flag in sessionStorage to indicate the loading screen has been shown
            sessionStorage.setItem('loadingScreenShown', 'true');
        }, delay);
    } else {
        // Hide the loading screen and show the main content immediately
        loadingScreen.style.display = 'none';
        mainContent.forEach(function(content) {
            content.style.display = 'block';
        });
        document.body.style.overflow = 'auto';
    }
});



