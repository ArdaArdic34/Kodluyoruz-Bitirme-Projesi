const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      moonicon = body.querySelector(".bx bxs-moon"),
      sunicon = body.querySelector(".fa-sun"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".moon"),
      modeText = body.querySelector(".mode-text");

      if (window.screen.width <= 768) {
        sidebar.classList.add("close");
    }   

    toggle.addEventListener("click" , () =>{
        sidebar.classList.toggle("close");
    })  

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("light");

});

function myFunction(x) {
    moonicon.classList.toggle('bx bxs-sun');
}

