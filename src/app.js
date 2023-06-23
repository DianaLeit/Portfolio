const pawButton = document.getElementById("catpaw");
const navList = document.getElementById("navList");

function toggleButton() {
  navList.classList.toggle("show");
}

pawButton.addEventListener("click", toggleButton);
