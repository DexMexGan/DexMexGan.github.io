document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("aboutMeLink")
    .addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("mainContent").style.display = "none";
      document.getElementById("portfolioSection").style.display = "none";
      document.getElementById("contactSection").style.display = "none";
      document.getElementById("aboutMeContent").style.display = "block";
    });
  document.getElementById("goHomeLink").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("aboutMeContent").style.display = "none";
    document.getElementById("portfolioSection").style.display = "none";
    document.getElementById("contactSection").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  });
  document
    .getElementById("portfolioLink")
    .addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("mainContent").style.display = "none";
      document.getElementById("aboutMeContent").style.display = "none";
      document.getElementById("contactSection").style.display = "none";
      // This next line should target 'portfolioSection', not 'portfolioContent' or 'contactContent'.
      document.getElementById("portfolioSection").style.display = "block";
    });
  document
    .getElementById("contactLink")
    .addEventListener("click", function (e) {
      e.preventDefault();
      // Hide all sections
      document.getElementById("mainContent").style.display = "none";
      document.getElementById("aboutMeContent").style.display = "none";
      document.getElementById("portfolioSection").style.display = "none";
      // Display the contact section
      document.getElementById("contactSection").style.display = "block";
    });
  document.getElementById("GradButton").addEventListener("click", function () {
    window.location.href = "https://forms.gle/tErSWdTsZosv5ayX8";
  });
  document.getElementById("WedButton").addEventListener("click", function () {
    window.location.href = "https://forms.gle/ARkPTMjhG1XJFGPfA";
  });
  document.getElementById("MiscButton").addEventListener("click", function () {
    window.location.href = "https://forms.gle/p4fKCYRQe1DGSCg17";
  });
});
