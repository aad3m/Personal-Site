document.querySelector('.ham-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.button-container').classList.toggle('active');
});