// Part 2 - Simple interactivity
document.addEventListener("DOMContentLoaded", function() {
  console.log("Little Heroes NPO - Part 2 Loaded");
  
  // Simple contact form alert
  const form = document.querySelector("form");
  if(form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you for contacting Little Heroes NPO! We will help children in Durban shine!");
    });
  }
});