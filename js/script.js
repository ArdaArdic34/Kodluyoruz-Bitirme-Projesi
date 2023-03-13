const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      repwShowHide = document.querySelectorAll(".re-eye-icon"),
      links = document.querySelectorAll(".link");

repwShowHide.forEach(reeyeIcon => {
    reeyeIcon.addEventListener("click", () => {
        let repwFields = reeyeIcon.parentElement.parentElement.querySelectorAll(".repassword");
        
        repwFields.forEach(repassword => {
            if(repassword.type === "password"){
                repassword.type = "text";
                reeyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            repassword.type = "password";
            reeyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})