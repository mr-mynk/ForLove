const draggableElements = document.querySelectorAll(".paper");
let zIndexCounter = 100; // Start with a base z-index for draggable elements

draggableElements.forEach((elem) => {
  let initialX, initialY, currentX, currentY;
  let isDragging = false;

  // Sensitivity in pixels when the page should start scrolling
  const scrollSensitivity = 50;
  const scrollSpeed = 20;

  // Mouse events
  elem.addEventListener("mousedown", (e) => {
    resetValues(); // Reset all values before starting a new drag
    isDragging = true;

    // Bring the clicked element to the top by increasing its z-index
    elem.style.zIndex = zIndexCounter++;

    // Correctly calculate the initial position relative to the mouse cursor
    initialX = e.clientX - elem.offsetLeft;
    initialY = e.clientY - elem.offsetTop;

    e.preventDefault(); // Prevent text selection
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
      elem.style.left = currentX + "px";
      elem.style.top = currentY + "px";

      // Scroll the page if dragging near the edges
      handleScroll(e.clientX, e.clientY);
    }
  });

  document.addEventListener("mouseup", () => {
    if (isDragging) {
      resetValues(); // Reset all values after dragging is complete
    }
  });

  // Touch events
  elem.addEventListener("touchstart", (e) => {
    resetValues(); // Reset all values before starting a new drag
    isDragging = true;

    // Bring the touched element to the top by increasing its z-index
    elem.style.zIndex = zIndexCounter++;

    // Correctly calculate the initial position relative to the touch point
    initialX = e.touches[0].clientX - elem.offsetLeft;
    initialY = e.touches[0].clientY - elem.offsetTop;

    e.preventDefault(); // Prevent default touch behavior like scrolling
  });

  document.addEventListener("touchmove", (e) => {
    if (isDragging) {
      currentX = e.touches[0].clientX - initialX;
      currentY = e.touches[0].clientY - initialY;
      elem.style.left = currentX + "px";
      elem.style.top = currentY + "px";

      // Scroll the page if dragging near the edges
      handleScroll(e.touches[0].clientX, e.touches[0].clientY);
    }
  });

  document.addEventListener("touchend", () => {
    if (isDragging) {
      resetValues(); // Reset all values after dragging is complete
    }
  });

  // Function to handle page scrolling based on cursor position
  function handleScroll(clientX, clientY) {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Scroll horizontally
    if (clientX > viewportWidth - scrollSensitivity) {
      window.scrollBy(scrollSpeed, 0); // Scroll right
    } else if (clientX < scrollSensitivity) {
      window.scrollBy(-scrollSpeed, 0); // Scroll left
    }

    // Scroll vertically
    if (clientY > viewportHeight - scrollSensitivity) {
      window.scrollBy(0, scrollSpeed); // Scroll down
    } else if (clientY < scrollSensitivity) {
      window.scrollBy(0, -scrollSpeed); // Scroll up
    }
  }

  // Function to reset all variables after each drag
  function resetValues() {
    isDragging = false;
    initialX = 0;
    initialY = 0;
    currentX = 0;
    currentY = 0;
  }
});
