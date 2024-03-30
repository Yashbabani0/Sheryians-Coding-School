let coontainer = document.querySelector("#container");
let icon = document.querySelector("i");

coontainer.addEventListener("dblclick", function () {
  icon.style.transform = "translate(-50%, -50%) scale(1)";
  setTimeout(function () {
    icon.style.transform = "translate(-50%, -50%) scale(0)";
  }, 700);
});
