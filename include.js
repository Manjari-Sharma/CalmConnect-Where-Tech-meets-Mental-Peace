function includeHTML(id, url) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
      });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    includeHTML("header", "header.html");
    includeHTML("footer", "footer.html");
  });
  