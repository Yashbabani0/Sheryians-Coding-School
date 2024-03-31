let elem = document.querySelectorAll(".elem");
let elemImage = document.querySelectorAll(".elem img");

elem.forEach(function (elem, index) {
  elem.addEventListener("mousemove", function (cord) {
    elemImage[index].style.left = cord.x + "px";
    // elemImage[index].style.top = cord.y + "px";
  });
  elem.addEventListener("mouseenter", function () {
    elemImage[index].style.opacity = 1;
  });
  elem.addEventListener("mouseleave", function () {
    elemImage[index].style.opacity = 0;
  });
});
