document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;

  function changeSlide() {
    items[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add("active");
  }

  setInterval(changeSlide, 3000);


  const storedSectionId = localStorage.getItem('activeSection');
  if (storedSectionId) {
    switchSection(storedSectionId); 
  } else {
    switchSection('current-auction');
  }


  const urlParams = new URLSearchParams(window.location.search);
  const sectionId = urlParams.get('section');

  if (sectionId) {
    switchSection(sectionId);
  }
});

function switchSection(sectionId) {
  const sections = document.querySelectorAll('.auction-section');
  sections.forEach(section => section.classList.remove('active'));
  const sectionToActivate = document.getElementById(sectionId);
  if (sectionToActivate) {
    sectionToActivate.classList.add('active');
    localStorage.setItem('activeSection', sectionId);
  }
}

function upcomingAuctions(){
  window.location.href = 'Auctions.html?section=upcoming-auctions';
}

function redirectToBid(item, price, image, description = 'no des') {
  const url = `bid.html?item=${encodeURIComponent(item)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(image)}&description=${encodeURIComponent(description)}`;
  window.location.href = url;
}