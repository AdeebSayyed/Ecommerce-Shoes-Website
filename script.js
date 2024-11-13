document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting immediately

    // Get values from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation for non-empty values (just for the demo)
    if (username && password) {
        // Show success alert (this simulates a successful login)
        alert('Login successful!');
        
        // Optionally, you could redirect to a new page here
        // window.location.href = 'dashboard.html'; // Example of redirection
    } else {
        alert('Please fill in both fields.');
    }
});