const form = document.getElementById("form_id");
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
  const name = document.getElementById("name");
  const email = document.getElementById("email").value;
  const password = passwordInput.value;

  if (name.value === ''|| name.value == null) {
    // alert('Please enter your name.');;
    const newspan = document.createElement("span");
    name.parentElement.append(newspan);
    newspan.classList = 'error';
    newspan.innerHTML = 'please enter';

    return;
  }

  if (email === '') {
    alert('Please enter your email.');
    return;
  }
  if (password === '') {
    alert('Please enter your password.');
    return;
  }
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if(!regex.test(password)) {
    passwordInput.setCustomValidity('Password should be 8 characters long along with one special character, one number and one capital letter');
    return;
  }
  submitForm();
});
function submitForm() {
  alert("Form submitted successfully!");
}
