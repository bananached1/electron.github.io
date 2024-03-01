function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

// Function to close the side navigation
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Event listener for clicking the bars icon to open the side navigation
document.getElementById("openNav").addEventListener("click", openNav);