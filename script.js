const inputBox = document.getElementById("mail");
const btn = document.querySelector(".btn");
const error = document.querySelector(".error-msg");
btn.addEventListener("click", () => {
  let a =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!inputBox.value.match(a)) {
    inputBox.classList.add("border-red");
    error.classList.add("appear");
  } else {
    inputBox.classList.remove("border-red");
    error.classList.remove("appear");
  }
});
