document.addEventListener("DOMContentLoaded", function(event) {
    // - Code to execute when all DOM content is loaded. 
    // - including fonts, images, etc.

    let backButton = document.getElementById('goBack');

    backButton.addEventListener('click', function(event) {
        window.location = '../../index.html';
    })
});