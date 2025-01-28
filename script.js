const form = document.getElementById('registrationForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const dobInput = document.getElementById('dob');
const genderInput = document.getElementById('gender');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const dobError = document.getElementById('dobError');
const genderError = document.getElementById('genderError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

form.addEventListener('submit', (e) => {
    let isValid = true;

    if (/\d/.test(firstNameInput.value)) {
        isValid = false;
        firstNameError.textContent = "First name should not contain numbers.";
    } else {
        firstNameError.textContent = "";
    }

    if (/\d/.test(lastNameInput.value)) {
        isValid = false;
        lastNameError.textContent = "Last name should not contain numbers.";
    } else {
        lastNameError.textContent = "";
    }

    if (!dobInput.value) {
        isValid = false;
        dobError.textContent = "Please select a valid date of birth.";
    } else {
        dobError.textContent = "";
    }

    if (!genderInput.value) {
        isValid = false;
        genderError.textContent = "Please select your gender.";
    } else {
        genderError.textContent = "";
    }

    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        isValid = false;
        emailError.textContent = "Please enter a valid email address.";
    } else {
        emailError.textContent = "";
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/;
    if (!passwordRegex.test(passwordInput.value)) {
        isValid = false;
        passwordError.textContent = "Password must include uppercase, lowercase, and special symbols.";
    } else {
        passwordError.textContent = "";
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        isValid = false;
        confirmPasswordError.textContent = "Passwords do not match.";
    } else {
        confirmPasswordError.textContent = "";
    }

    if (!isValid) {
        e.preventDefault();
    }
});
