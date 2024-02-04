document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("aboutMeLink")
    .addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("mainContent").style.display = "none";
      document.getElementById("aboutMeContent").style.display = "block";
    });
  document.getElementById("goHomeLink").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("aboutMeContent").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  });
});
