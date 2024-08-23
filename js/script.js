// Add some interactivity to the website
console.log("Hello, world!");

let element = document.getElementById("checkbox");
let closeBtn = document.getElementById("close-icon");
let menu = document.getElementById("menu-icon");
var mobileNav = document.getElementById("mobile-nav");
var switchBtn = document.getElementById("switch");


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

menu.addEventListener("click", function(){
  mobileNav.style.display = "block";
  mobileNav.style.right = "0";
  switchBtn.style.right = "150px";
})

closeBtn.addEventListener("click", function(){
  
  mobileNav.style.right = "-702px";
  switchBtn.style.right = "-150px";
  setTimeout('mobileNav.style.display = "none"', 50);

});

window.onresize = function() {
        if ((window.innerWidth > 1023) && (mobileNav.style.display == "block")) {
          mobileNav.style.right = "-702px";
          switchBtn.style.right = "-150px";
          setTimeout('mobileNav.style.display = "none"', 50);
        }
};

