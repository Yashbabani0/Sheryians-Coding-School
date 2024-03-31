let body = document.querySelector("body");
let cursor = document.querySelector("#cursor");

body.addEventListener("mousemove", function (cordi) {
  cursor.style.left = cordi.x + "px";
  cursor.style.top = cordi.y + "px";
});
