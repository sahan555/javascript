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
    const email =document.getElementById('email').value;   
    const password = passwordInput.value;
    if (name === '') {
      alert('Please enter your name.');
      return;
    };
    submitForm();

});
function submitForm() {
  // Here, you can submit the form data using AJAX or perform any other actions
  alert('Form submitted successfully!');
}