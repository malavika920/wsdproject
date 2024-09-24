document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const dobInput = document.getElementById('dob');
    const submitBtn = document.getElementById('submitBtn');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const dobError = document.getElementById('dobError');

    function validateName() {
        const name = nameInput.value.trim();
        const regex = /^[A-Za-z\s]{3,}$/;
        if (!regex.test(name)) {
            nameError.textContent = 'Name must be at least 3 alphabetic characters.';
            nameInput.classList.add('border-red-500');
            nameInput.classList.remove('border-green-500');
            return false;
        } else {
            nameError.textContent = '';
            nameInput.classList.add('border-green-500');
            nameInput.classList.remove('border-red-500');
            return true;
        }
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            emailError.textContent = 'Invalid email format.';
            emailInput.classList.add('border-red-500');
            emailInput.classList.remove('border-green-500');
            return false;
        } else {
            emailError.textContent = '';
            emailInput.classList.add('border-green-500');
            emailInput.classList.remove('border-red-500');
            return true;
        }
    }

    function validatePassword() {
        const password = passwordInput.value.trim();
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!regex.test(password)) {
            passwordError.textContent = 'Password must be at least 8 characters long and contain letters and numbers.';
            passwordInput.classList.add('border-red-500');
            passwordInput.classList.remove('border-green-500');
            return false;
        } else {
            passwordError.textContent = '';
            passwordInput.classList.add('border-green-500');
            passwordInput.classList.remove('border-red-500');
            return true;
        }
    }

    function validateConfirmPassword() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        if (password !== confirmPassword) {
            confirmPasswordError.textContent = 'Passwords do not match.';
            confirmPasswordInput.classList.add('border-red-500');
            confirmPasswordInput.classList.remove('border-green-500');
            return false;
        } else {
            confirmPasswordError.textContent = '';
            confirmPasswordInput.classList.add('border-green-500');
            confirmPasswordInput.classList.remove('border-red-500');
            return true;
        }
    }

    function validateDOB() {
        const dob = dobInput.value;
        const today = new Date();
        const birthDate = new Date(dob);
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        if (dob === '' || age < 18) {
            dobError.textContent = 'You must be at least 18 years old.';
            dobInput.classList.add('border-red-500');
            dobInput.classList.remove('border-green-500');
            return false;
        } else {
            dobError.textContent = '';
            dobInput.classList.add('border-green-500');
            dobInput.classList.remove('border-red-500');
            return true;
        }
    }

    function validateForm() {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        const isDOBValid = validateDOB();

        return isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isDOBValid;
    }

    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validateConfirmPassword);
    dobInput.addEventListener('input', validateDOB);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateForm()) {
            alert('Registration successful!');
        }
    });
});
