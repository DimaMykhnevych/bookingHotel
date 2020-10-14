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
let photos = document.querySelector('.choosed-number-type');
const clasForRemoveElement = 'd-lg-none  d-md-none d-sm-none d-none';

const bookNumber = (e) => {
  let allText = e.target.parentNode.innerText;
  let hotelName = allText.split('\n')[0];
  let pathToImage =
    e.target.parentNode.parentNode.firstElementChild.attributes[1].value;
  showTable(hotelName, pathToImage);
};

const showMainContent = () => {
  main.setAttribute('class', 'main d-flex align-items-center flex-column mb-5');
  hotels.setAttribute(
    'class',
    'hotels-main d-flex align-items-center flex-column mb-4'
  );
  photos.setAttribute('class', clasForRemoveElement);
  bookingRooms.setAttribute('class', clasForRemoveElement);
};

function showRoomsPhotos() {
  photos.setAttribute('class', 'choosed-number-type');
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

function showTable(hotelName, pathToImage) {
  let choosedHotelName = document.querySelector('#choose-hotel-name');
  let img = document.querySelector('#choosed-hotel-image');
  main.setAttribute('class', clasForRemoveElement);
  hotels.setAttribute('class', clasForRemoveElement);
  bookingRooms.setAttribute(
    'class',
    'booking-rooms d-flex align-items-center flex-column mb-4'
  );
  img.setAttribute('src', pathToImage);
  choosedHotelName.innerHTML = hotelName;
}

backToHotelBtn.addEventListener('click', showMainContent);
row1.addEventListener('click', row1Photos);
row2.addEventListener('click', row2Photos);
row3.addEventListener('click', row3Photos);
a.forEach((element) => {
  element.addEventListener('click', bookNumber);
});
