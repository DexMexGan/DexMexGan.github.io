document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("aboutMeLink")
    .addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("mainContent").style.display = "none";
      document.getElementById("GradButtonContent").style.display = "none";
      document.getElementById("WedButtonContent").style.display = "none";
      document.getElementById("MiscButtonContent").style.display = "none";
      document.getElementById("aboutMeContent").style.display = "block";
    });
  document.getElementById("goHomeLink").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("aboutMeContent").style.display = "none";
    document.getElementById("GradButtonContent").style.display = "none";
    document.getElementById("WedButtonContent").style.display = "none";
    document.getElementById("MiscButtonContent").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  });
  document.getElementById("GradButton").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("mainContent").style.display = "none";
    document.getElementById("aboutMeContent").style.display = "none";
    document.getElementById("WedButtonContent").style.display = "none";
    document.getElementById("MiscButtonContent").style.display = "none";
    document.getElementById("GradButtonContent").style.display = "block";
  });
  document.getElementById("WedButton").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("mainContent").style.display = "none";
    document.getElementById("aboutMeContent").style.display = "none";
    document.getElementById("MiscButtonContent").style.display = "none";
    document.getElementById("GradButtonContent").style.display = "none";
    document.getElementById("WedButtonContent").style.display = "block";
  });
  document.getElementById("MiscButton").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("mainContent").style.display = "none";
    document.getElementById("aboutMeContent").style.display = "none";
    document.getElementById("WedButtonContent").style.display = "none";
    document.getElementById("GradButtonContent").style.display = "none";
    document.getElementById("MiscButtonContent").style.display = "block";
  });
});
