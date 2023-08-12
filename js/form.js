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
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = passwordInput.value;

  if (name === ''|| name == null) {
    // alert('Please enter your name.');;
    alert('Please enter your name.');
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
    alert('Password should be 8 characters long along with one special character, one number and one capital letter');
    return;
  }
  submitForm();
});
function submitForm() {
    // Get the form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      // Add other form fields as needed
    };
  
    // Save the form data to Local Storage
    localStorage.setItem('registrationData', JSON.stringify(formData));
  
    // Show a success message
    alert('Form submitted successfully!');
  
    // Optionally, you can reset the form fields
    document.getElementById('form_id').reset();
  }
  
// Retrieve stored data from Local Storage
const storedData = localStorage.getItem('registrationData');

// if (storedData) {
//   const formData = JSON.parse(storedData);
//   // Use the formData as needed
// }

