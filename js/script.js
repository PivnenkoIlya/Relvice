document
  .querySelector(".header__burger")
  .addEventListener("click", function (event) {
    document.querySelector(".menu").classList.toggle("active");
    event.preventDefault();
  });
