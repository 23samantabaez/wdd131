
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
// Code to show modal  - Use event parameter 'e' which is the same as event
//figure out which image was clicked
//get the name of the large image
//put the correct src path in the modal image
// Make sure the user clicked an image
    if (e.target.tagName !== 'IMG') {
        return;
    }
    console.log(e.target);
    console.log("current target", e.currentTarget);

    const imgClicked = e.target;
    const fileName = imgClicked.getAttribute('src');
    const alt = imgClicked.getAttribute('alt');
    const largeImg = fileName.replace("-sm", "-full");

    modalImage.src = largeImg;
    modalImage.alt = alt;
    modal.showModal();
}

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});


// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
          