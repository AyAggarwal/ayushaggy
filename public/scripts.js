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

document
  .getElementById("scrollDownButton2")
  .addEventListener("click", function () {
    // Get the position of the 'projects' section relative to the viewport.
    let sectionPos = document
      .getElementById("projects-title")
      .getBoundingClientRect().top;

    // Add the current scroll position to get the absolute position on the page.
    let absolutePos = window.scrollY + sectionPos;

    // Using the 'window' object's scroll method to scroll to the desired position.
    window.scrollTo({
      top: absolutePos,
      behavior: "smooth", // Smooth scrolling.
    });
  });

document
  .getElementById("scrollDownButton3")
  .addEventListener("click", function () {
    // Get the position of the body element to scroll to.
    let bodyPos = document.body.getBoundingClientRect().top;

    // Using the 'window' object's scroll method to scroll to the desired position.
    window.scrollTo({
      top: bodyPos + window.innerHeight, // Scrolls down by one viewport height.
      behavior: "smooth", // Smooth scrolling.
    });
  });
