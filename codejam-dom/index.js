setTimeout(function () {
  document.getElementById("notification").style.display = "block";
}, 5000);

closeWin = () => {
  document.getElementById("container").style.display = "none";
  localStorage.setItem('disabled', document.getElementById("disabled-checkbox").checked);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("disabled-checkbox").checked = (localStorage.getItem('disabled') == "true");
  if (localStorage.getItem('disabled') == "true") {
    closeWin();
  }
});