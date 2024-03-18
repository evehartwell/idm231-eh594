/* expand gallery image when clicked */
const photos = document.querySelectorAll('.photo');

photos.forEach(photo => {
    photo.addEventListener('click', () => {
        photo.classList.toggle('expanded');
    });
});


