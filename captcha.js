function generateCaptcha() {
    return Math.floor(Math.random() * 9000) + 1000; // Generates a number between 1000 and 9999
}

// Function to verify the captcha input
function verifyCaptcha() {
    const captchaInput = document.getElementById('captcha-input').value;
    const captchaNumber = document.getElementById('captcha-number').textContent;
    return captchaInput == captchaNumber;
}

// Set up the captcha on page load
document.addEventListener('DOMContentLoaded', () => {
    const captchaNumber = generateCaptcha();
    document.getElementById('captcha-number').textContent = captchaNumber;
    
    document.getElementById('captcha-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const result = verifyCaptcha();
        if (result) {
            document.getElementById('captcha-result').textContent = 'Captcha verified!';
        } else {
            document.getElementById('captcha-result').textContent = 'Captcha verification failed. Please try again.';
        }
    });
});