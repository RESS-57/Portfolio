document.querySelectorAll(".home-navbar-item").forEach((item) => {
  const submenu = item.querySelector(".home-navbar-submenu");
  if (submenu) {
    item.addEventListener("mouseenter", function () {
      submenu.style.display = "block";
      setTimeout(() => {
        submenu.style.opacity = "1";
        updateSiblings(item, submenu.offsetHeight);
      }, 0);
    });

    item.addEventListener("mouseleave", function () {
      submenu.style.opacity = "0";
      updateSiblings(item, 0);
      setTimeout(() => {
        submenu.style.display = "none";
      }, 300);
    });
  }
});

function updateSiblings(item, height) {
  let sibling = item.nextElementSibling;
  while (sibling) {
    sibling.style.transform = `translateY(${height}px)`;
    sibling.style.transition = "transform 0.3s ease-in-out";
    sibling = sibling.nextElementSibling;
  }
}
