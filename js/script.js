"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".wrapper"),
    item = document.querySelectorAll(".slide");

  let currentSlide = 1; // To initially display the first slide

  // Event handlers for Previous and Next buttons
  const prev = document.createElement("button");
  const next = document.createElement("button");

  prev.innerText = "Previous";
  prev.classList.add("slider-button", "prev");
  next.innerText = "Next";
  next.classList.add("slider-button", "next");

  wrapper.appendChild(prev);
  wrapper.appendChild(next);

  // Function to display slide number n
  function showSlide(n) {
    if (n > item.length) {
      currentSlide = 1;
    }

    if (n < 1) {
      currentSlide = item.length;
    }

    // We go through all the slides and hide them
    item.forEach((item) => {
      item.classList.add("hide");
    });

    // We show the current slide
    item[currentSlide - 1].classList.remove("hide");
    return currentSlide; // We return the number of the current slide
  }

  // Function for switching slides
  function plusSlide(n) {
    const result = showSlide((currentSlide += n));
    console.log("Current Slide:", result); // Output the result to the console
  }

  // Event handlers for Previous and Next buttons
  prev.addEventListener("click", () => {
    plusSlide(-1); // Go to the previous slide
    console.log("Previous Button Clicked");
  });
  next.addEventListener("click", () => {
    plusSlide(1); // Go to the next slide
    console.log("Next Button Clicked");
  });
});
