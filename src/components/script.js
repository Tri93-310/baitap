// slideshow.js
let currentIndex = 0;
const totalImages = 10; // Set this to the number of images available (in this case, we'll have 10 images)

// Function to update the image source
function updateImage() {
  const imgElement = document.getElementById('slideshow-image');
  imgElement.src = `https://picsum.photos/300/200?image=${currentIndex}`;
}

// Function to go to the previous image
function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Prevent negative index
  updateImage();
}

// Function to go to the next image
function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages; // Loop back after the last image
  updateImage();
}

// Function to go back to the first image
function goToStart() {
  currentIndex = 0;
  updateImage();
}
