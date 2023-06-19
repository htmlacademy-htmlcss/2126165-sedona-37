const searchButton = document.querySelector(".hotel-search-button");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".modal-close-button");

searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
});

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
});
