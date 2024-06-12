// Add some interactivity to the website
console.log("Hello, world!");
let element = document.getElementById("checkbox");





element.addEventListener("change", function(){
    let h1 = document.querySelector("h1");
    let logo = document.getElementById("logo");

    let lightImageUrl = "images/alarado-icon-homepage.svg"
    let darkImageUrl = "images/alarado-icon-homepage-dark.svg"

    if (element.checked == true) {
        console.log("Light");
        document.body.setAttribute("data-theme", "light");
        logo.src = lightImageUrl;
      } else {
        console.log("Dark");
        document.body.setAttribute("data-theme", "dark");
        logo.src = darkImageUrl;

      }
});

