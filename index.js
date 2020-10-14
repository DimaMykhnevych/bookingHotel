let a = document.querySelectorAll('.btn-primary');
let main = document.querySelector('.main');
let hotels = document.querySelector('.hotels-main');
let bookingRooms = document.querySelector('.booking-rooms');
let backToHotelBtn = document.querySelector('#backToHotels');
let table = document.querySelector('.rooms-table-content');
let row1 = document.querySelector('#row1');
let row2 = document.querySelector('#row2');
let row3 = document.querySelector('#row3');
let room1 = document.querySelector('#room1');
let room2 = document.querySelector('#room1');
let room3 = document.querySelector('#room1');
let submitBtn = document.querySelector('#submit');
let message = document.querySelector('.message');
let spin = document.querySelector('.spinn');
let photos = document.querySelector('.choosed-number-type');
let faq = document.querySelector('#faq');
let about = document.querySelector('#about-us');
const clasForRemoveElement = 'd-lg-none  d-md-none d-sm-none d-none';
let hotelBookName;

const bookNumber = (e) => {
  let allText = e.target.parentNode.innerText;
  let hotelName = allText.split('\n')[0];
  hotelBookName = hotelName;
  let pathToImage =
    e.target.parentNode.parentNode.firstElementChild.attributes[1].value;
  showTable(hotelName, pathToImage);
};

const showMainContent = () => {
  window.scrollTo(0, 500);
  main.setAttribute('class', 'main d-flex align-items-center flex-column mb-5');
  faq.setAttribute('class', 'faq d-flex align-items-center flex-column mb-4');
  about.setAttribute(
    'class',
    'about-us d-flex align-items-center flex-column mb-4'
  );
  hotels.setAttribute(
    'class',
    'hotels-main d-flex align-items-center flex-column mb-4'
  );
  photos.setAttribute('class', clasForRemoveElement);
  message.setAttribute('class', clasForRemoveElement);
  submitBtn.style.display = 'block';
  spin.setAttribute(
    'class',
    'd-lg-none d-md-none d-sm-none d-none spinn d-flex justify-content-center mb-1'
  );
  bookingRooms.setAttribute('class', clasForRemoveElement);
};

function showRoomsPhotos() {
  photos.setAttribute('class', 'choosed-number-type');
  window.scrollTo(0, 1200);
}
const row1Photos = (e) => {
  showRoomsPhotos();
  room1.setAttribute('src', 'images/room1.jpg');
  room2.setAttribute('src', 'images/room2.jpg');
  room3.setAttribute('src', 'images/room3.jpg');
};
const row2Photos = (e) => {
  showRoomsPhotos();
  room1.setAttribute('src', 'images/froom1.jpeg');
  room2.setAttribute('src', 'images/froom2.jpg');
  room3.setAttribute('src', 'images/froom3.webp');
};
const row3Photos = (e) => {
  showRoomsPhotos();
  room1.setAttribute('src', 'images/sroom1.jpg');
  room2.setAttribute('src', 'images/sroom2.jpg');
  room3.setAttribute('src', 'images/sroom3.jpg');
};

const onSubmitBtnClick = () => {
  submitBtn.style.display = 'none';
  spin.setAttribute('class', ' spinn d-flex justify-content-center mb-1');
  setTimeout(() => spin.setAttribute('class', clasForRemoveElement), 3000);
  setTimeout(() => message.setAttribute('class', 'message jumbotron'), 3100);
};

function showTable(hotelName, pathToImage) {
  window.scrollTo(0, 450);
  let choosedHotelName = document.querySelector('#choose-hotel-name');
  let choosedHotelHeading = document.querySelector('#choosedHotelName');
  let img = document.querySelector('#choosed-hotel-image');
  main.setAttribute('class', clasForRemoveElement);
  hotels.setAttribute('class', clasForRemoveElement);
  faq.setAttribute('class', clasForRemoveElement);
  about.setAttribute('class', clasForRemoveElement);
  choosedHotelHeading.innerHTML = hotelBookName;
  bookingRooms.setAttribute(
    'class',
    'booking-rooms d-flex align-items-center flex-column mb-4'
  );
  img.setAttribute('src', pathToImage);
  choosedHotelName.innerHTML = hotelName;
}

backToHotelBtn.addEventListener('click', showMainContent);
submitBtn.addEventListener('click', onSubmitBtnClick);
row1.addEventListener('click', row1Photos);
row2.addEventListener('click', row2Photos);
row3.addEventListener('click', row3Photos);
a.forEach((element) => {
  element.addEventListener('click', bookNumber);
});
