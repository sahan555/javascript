const form = document.getElementById("myform");
const passwordInput = document.getElementById("password");

const eyeIcon = document.querySelector(".eyeicon");
eyeIcon.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.add("fa-eye");
    eyeIcon.classList.remove("fa-eye-slash");
  }
});

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name =document.getElementById('name').value;                
});
