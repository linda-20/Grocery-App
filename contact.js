// contact.js

document.addEventListener("DOMContentLoaded", function () {
    // Get the contact form element
    const contactForm = document.getElementById("contactForm");
  
    // Add an event listener for form submission
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Get the values from the form fields
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      // You can customize the SweetAlert message according to your needs
      const alertMessage = `Thank you, ${firstName} ${lastName}! Your message has been sent.`;
  
      // Display the SweetAlert
      Swal.fire({
        title: "Message Sent!",
        text: alertMessage,
        icon: "success",
        confirmButtonText: "OK",
      });
  
      // Clear the form fields after displaying the alert
      contactForm.reset();
    });
  });
  
