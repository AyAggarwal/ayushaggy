document
  .getElementById("scrollDownButton1")
  .addEventListener("click", function () {
    // Get the position of the body element to scroll to.
    let bodyPos = document.body.getBoundingClientRect().top;

    // Using the 'window' object's scroll method to scroll to the desired position.
    window.scrollTo({
      top: bodyPos + window.innerHeight, // Scrolls down by one viewport height.
      behavior: "smooth", // Smooth scrolling.
    });
  });

//hide button
document
  .getElementById("toggleTikTokButton")
  .addEventListener("click", function () {
    var tiktokContainer = document.getElementById("tiktok-container");
    var buttonLabel = document.getElementById("toggleTikTokButton");

    // Toggle the hidden class
    tiktokContainer.classList.toggle("hidden");

    // Update the button label accordingly
    if (tiktokContainer.classList.contains("hidden")) {
      buttonLabel.textContent = "Show Video";
    } else {
      buttonLabel.textContent = "Hide Video";
    }
  });

document.getElementById("toggleTheme").addEventListener("click", function () {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
});

if (!document.documentElement.hasAttribute("data-theme")) {
  document.documentElement.setAttribute("data-theme", "dark"); // default to dark
}

// let scrollTimeout; // To store the timeout reference

// document
//   .getElementById("scrollDownButton2")
//   .addEventListener("click", function () {
//     // Get the position of the 'projects' section relative to the viewport.
//     let sectionPos = document
//       .getElementById("projects-title")
//       .getBoundingClientRect().top;

//     // Add the current scroll position to get the absolute position on the page.
//     let absolutePos = window.scrollY + sectionPos;

//     // Clear any previous timeouts (if any)
//     clearTimeout(scrollTimeout);

//     // Add an event listener for the scroll event
//     window.addEventListener("scroll", onScroll);

//     // Using the 'window' object's scroll method to scroll to the desired position.
//     window.scrollTo({
//       top: absolutePos,
//       behavior: "smooth", // Smooth scrolling.
//     });
//   });

// function onScroll() {
//   // Clear any previous timeouts
//   clearTimeout(scrollTimeout);

//   // Set a new timeout
//   scrollTimeout = setTimeout(function () {
//     // This function will be called when the user stops scrolling for 66 milliseconds

//     // Remove the event listener to avoid further detections
//     window.removeEventListener("scroll", onScroll);

//     // Hide the element
//     document.getElementById("scrollDownButton2").style.display = "none";
//   }, 66); // The delay, in milliseconds. Adjust as needed.
// }
