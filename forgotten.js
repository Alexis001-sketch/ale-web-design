document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        // Proceed with form submission
        this.submit();
    }
});

