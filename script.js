$(document).ready(function() {
    // Dummy data for users
    let users = [
        { name: "John Doe", role: "Admin", status: "Present" },
        { name: "Jane Smith", role: "Manager", status: "Absent" },
        { name: "Michael Brown", role: "Employee", status: "Present" }
    ];

    // Populate user list in user management section
    users.forEach(user => {
        $('#user-list').append(
            `<tr>
                <td>${user.name}</td>
                <td>${user.role}</td>
                <td>${user.status}</td>
                <td>
                    <button class="btn btn-sm btn-warning">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>`
        );
    });

    // Event handler for attendance menu
    $('#attendance-menu').click(function() {
        // Hide all sections
        clear();
        $('#attendance-section').removeClass('d-none');
        $('#attendance-menu').addClass('active');
        
        // Clear the previous attendance data
        $('#attendance-list').empty();

        // Populate attendance list for today
        users.forEach(user => {
            $('#attendance-list').append(
                `<tr>
                    <td>${user.name}</td>
                    <td>${user.role}</td>
                    <td>${user.status}</td>
                </tr>`
            );
        });
    });

    // Event handler for dashboard menu
    $('#dashboard-menu').click(function() {
        clear();
        $('#dashboard-section').removeClass('d-none');
        $('#dashboard-menu').addClass('active');
    });

    // Event handler for user management menu
    $('#user-management-menu').click(function() {
        clear();
        $('#user-management').removeClass('d-none');
        $('#user-management-menu').addClass('active');
    });
    
    // Add User Button
    $('#add-user-btn').click(function() {
        alert('New User Form');
    });
});

// Function to clear all sections
function clear() {
    $('#dashboard-section').addClass('d-none');
    $('#attendance-section').addClass('d-none');
    $('#user-management').addClass('d-none');

    $('#user-management-menu').removeClass('active');
    $('#dashboard-menu').removeClass('active');
    $('#attendance-menu').removeClass('active');
}
