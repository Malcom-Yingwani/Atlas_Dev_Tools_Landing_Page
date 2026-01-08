// copyright logic
document.getElementById("copyright-year").textContent = new Date().getFullYear();


// email submission

const joinButton = document.getElementById('join_button');
    const emailField = document.getElementById('email_field');
    const successMessage = document.getElementById('success_message')

    if (joinButton && emailField && successMessage) {
      
        
        joinButton.addEventListener('click', function() {
            const email = emailField.value.trim();
            
            if (email) {
                // Clear the email field
                emailField.value = '';
                
                // Show success message
                successMessage.style.display = '';
                
                // Hide message after 4 seconds
                setTimeout(function() {
                    successMessage.style.display = 'none';
                }, 4000);
                
            }
        });
    }