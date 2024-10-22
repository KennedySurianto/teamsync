/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Dummy data for users
const users = [
    { email: 'admin@gmail.com', password: '123123', role: 'Admin' },
    { email: 'manager@gmail.com', password: '123123', role: 'Manager' },
    { email: 'employee@gmail.com', password: '123123', role: 'Employee' },
];

document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get the email and password input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if the user exists in the dummy data
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // Redirect based on the user's role
        if (user.role === 'Manager') {
            window.location.href = 'manager-dashboard.html';
        } else if (user.role === 'Employee') {
            window.location.href = 'employee-dashboard.html';
        } else if (user.role === 'Admin') {
            window.location.href = 'admin-dashboard.html';
        }
    } else {
        // Handle incorrect login credentials
        alert('Invalid email or password.');
    }
})