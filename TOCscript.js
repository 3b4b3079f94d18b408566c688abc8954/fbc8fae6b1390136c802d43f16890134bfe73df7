//  Contact Script

// $("#contactForm").submit((e) => {
//   e.preventDefault();
//   $.ajax({
//     url: "https://script.google.com/macros/s/AKfycby_TP9BHB_YeAkMYm6ik7ATHLAEMFIZnWEdf1OfGO9Y3pZRwXa00TRDzPFE18lLd40J/exec",
//     data: $("#contactForm").serialize(),
//     method: "post",
//     success: function (response) {
//       alert("Form submitted successfully");
//       window.location.reload();
//       //window.location.href="https://google.com"
//     },
//     error: function (err) {
//       alert("Something Error");
//     },
//   });
// });

//  Contact Script with alert box

$("#contactForm").submit((e) => {
  e.preventDefault();

  $.ajax({
    url: "https://script.google.com/macros/s/AKfycby_TP9BHB_YeAkMYm6ik7ATHLAEMFIZnWEdf1OfGO9Y3pZRwXa00TRDzPFE18lLd40J/exec",
    data: $("#contactForm").serialize(),
    method: "post",
    success: function (response) {
      // Display success message in a SweetAlert2 popup with a close button
      Swal.fire({
        icon: "success",
        title: "Thank You for Your Wedding Photography Inquiry",
        showConfirmButton: true,
        confirmButtonText: "Close",
        allowOutsideClick: false,
      }).then(() => {
        // Reload the page or redirect to another page
        window.location.reload();
      });
    },
    error: function (err) {
      // Display error message in a SweetAlert2 popup with a close button
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Please try again later.",
        showConfirmButton: true,
        confirmButtonText: "Close",
      });
    },
  });
});

// -----------Fetch current Year---------

// Create a new Date object
var currentDate = new Date();

// Get the current year
var currentYear = currentDate.getFullYear();

// Display the current year in the element with id "currentYear"
document.getElementById("year").innerText = currentYear;

// -------Other Script------------

// Add a script to trigger the animation when the page loads
document.addEventListener("DOMContentLoaded", function () {
  // Delay the class addition to ensure the fade-in effect
  setTimeout(function () {
    document.querySelector(".card-blog").classList.add("show");
  }, 100);
});
