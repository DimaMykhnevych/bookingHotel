let a = document.querySelector('#armani-btn');
let main = document.querySelector('.main');
let hotels = document.querySelector('.hotels-main');

const bookNumber = () => {
  main.setAttribute('class', 'd-lg-none');
  hotels.setAttribute('class', 'd-lg-none');
};
a.addEventListener('click', bookNumber);
main.addEventListener('click', bookNumber);
