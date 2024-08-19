const draggableElements = document.querySelectorAll(".paper");

draggableElements.forEach((elem) => {
  let initialX, initialY, currentX, currentY;
  let isDragging = false;

  // Mouse events
  elem.addEventListener("mousedown", (e) => {
    isDragging = true;
    initialX = e.clientX - elem.offsetLeft;
    initialY = e.clientY - elem.offsetTop;
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
      elem.style.left = currentX + "px";
      elem.style.top = currentY + "px";
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // Touch events
  elem.addEventListener("touchstart", (e) => {
    isDragging = true;
    initialX = e.touches[0].clientX - elem.offsetLeft;
    initialY = e.touches[0].clientY - elem.offsetTop;
  });

  document.addEventListener("touchmove", (e) => {
    if (isDragging) {
      currentX = e.touches[0].clientX - initialX;
      currentY = e.touches[0].clientY - initialY;
      elem.style.left = currentX + "px";
      elem.style.top = currentY + "px";
    }
  });

  document.addEventListener("touchend", () => {
    isDragging = false;
  });
});
