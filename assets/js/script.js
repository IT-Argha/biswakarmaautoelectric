'use strict';



/**
 * MOBILE NAVBAR TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});


function callNow() {
  var phoneNumber = document.getElementById("phone").innerText;
  alert("Calling " + phoneNumber + "...");
  // You can replace the alert with actual phone call functionality if it's supported by the browser or integrate a third-party service.
}