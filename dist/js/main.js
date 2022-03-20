let btnHamburger = document.querySelector("#btnHamburger");
let header = document.querySelector(".header");
let overlay = document.querySelector(".overlay");
let navigation = document.querySelector(".header__mobile-navigation");
let opens = document.querySelectorAll(".open");

opens.forEach(open => {
    open.addEventListener('click', (e)=> {
        if (header.classList.contains("has-open")) {
            header.classList.remove("has-open");
            overlay.classList.remove("fade-in");
            overlay.classList.add("fade-out");
            navigation.classList.remove("show-navigation");
            navigation.classList.add("hide-navigation");
        }
    })
})



btnHamburger.addEventListener("click", function() {
    if (header.classList.contains("has-open")) {
        header.classList.remove("has-open");
        overlay.classList.remove("fade-in");
        overlay.classList.add("fade-out");
        navigation.classList.remove("show-navigation");
        navigation.classList.add("hide-navigation");
        

    } else {
        header.classList.add("has-open");
        overlay.classList.remove("fade-out");
        overlay.classList.add("fade-in");
        navigation.classList.remove("hide-navigation");
        navigation.classList.add("show-navigation");
    }
});

