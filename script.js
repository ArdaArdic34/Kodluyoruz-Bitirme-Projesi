const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector("#dark-moon"),
      modeText = body.querySelector(".mode-text");

    let target = document.body;
    let theme = localStorage.getItem("theme");
    if (theme != null) {
      target.classList.toggle("dark");
    }

modeSwitch.addEventListener("click" , () =>{
    let theme = localStorage.getItem("theme");
    if (theme != null) {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", "dark");
    }
    target.classList.toggle("dark");
});

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function kopyala(){
  var serverIp = document.getElementById("copy-server-ip").text;
  navigator.clipboard.writeText(copyText);
  alert("Link Kopyalandı!", copyText);
}

function modalalert() {
  var x = document.getElementById("snackbar-error");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function modalsucces() {
  var x = document.getElementById("snackbar-succes");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
/* CONSOLE MESSAGE */
var warningcopyrightstyle = ["margin: 16px 0", "border-radius: 10px", "text-align: center", "font-weight: 600", "align-items: center", "justify-content: center"].join(";");
var warningcontentheaderstyle = ["color: #ff0000","font-size: 32px","font-weight: 600","margin: 8px 0",].join(";");
var warningcontentstyle = ["background-color: #ff0000","color: #ffffff","padding: 20px","border-radius: 10px",].join(";");
console.log("%cDİKKAT!!!" +"%cBu alan geliştiricilere özel bir alandır. Birisi size buraya bir şey kopyalayıp yapıştırmanızı söylerse, bu 99.9% aldatmacadır eğer hesabına olan erişimini kaybetmek istemiyorsan lütfen buraya başkasının verdiği kodu girmeyiniz!" +`%cTelif Hakkı © ${new Date().getFullYear()} AncientRealms`, warningcontentheaderstyle, warningcontentstyle, warningcopyrightstyle
);