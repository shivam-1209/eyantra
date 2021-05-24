const responsiveNav = document.getElementById("responsiveMenu");
const hamburger = document.getElementById("hamburger");
let toggleCounter = 0;
function responsiveMenu() {
  if (toggleCounter == 0) {
    responsiveNav.style.display = "flex";
    toggleCounter++;
    hamburger.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    responsiveNav.style.display = "none";
    toggleCounter--;
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  }
}

function linkUpdate() {
  setTimeout(() => {
    var cookieArr = document.cookie.split(";");
    var cookiePair = cookieArr[0].split("=");
    document.getElementById("consulatationDashboardLink").setAttribute =
      ("href", `${cookiePair[1]}`);
  }, 5000);
}
