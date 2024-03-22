// expand gallery image when clicked 
const photos = document.querySelectorAll('.photo');

photos.forEach(photo => {
    photo.addEventListener('click', () => {
        photo.classList.toggle('expanded');
    });
});

// play sound clip 
document.addEventListener("DOMContentLoaded", function() {
    // Get audio element
    const audio = document.getElementById("soundClip");

    // Play sound
    audio.play();
});
