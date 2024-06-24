const navBarSlide = document.querySelector(".main_nav");
const navBarButton = document.querySelector(".burger_container");

const genresSublist = document.querySelector(".genres_sublist");
const genresButton = document.querySelector(".genres_sublist_arrow");

const platformsSublist = document.querySelector(".platforms_sublist");
const platformsButton = document.querySelector(".platforms_sublist_arrow");

//Open side menu
navBarButton.addEventListener("click", () => {
    let visibility = navBarSlide.getAttribute("data-visible");
    let icon = document.querySelector("#slide_icon");

    if(visibility === "false")
    {
        navBarSlide.setAttribute("data-visible", "true");
        icon.classList.replace("gg-menu", "gg-close");
    }
    else if(visibility === "true")
    {
        navBarSlide.setAttribute("data-visible", "false");
        icon.classList.replace("gg-close", "gg-menu");
    }
})

//Show sublists
genresButton.addEventListener("click", () => {
    let visibility = genresSublist.getAttribute("data-visible");
    
    if(visibility === "false")
    {
        genresSublist.setAttribute("data-visible", "true");
        genresButton.classList.replace("gg-chevron-down", "gg-chevron-up");
    }
    else if(visibility === "true")
    {
        genresSublist.setAttribute("data-visible", "false");
        genresButton.classList.replace("gg-chevron-up", "gg-chevron-down");
    }
})

platformsButton.addEventListener("click", () => {
    let visibility = platformsSublist.getAttribute("data-visible");
    
    if(visibility === "false")
    {
        platformsSublist.setAttribute("data-visible", "true");
        platformsButton.classList.replace("gg-chevron-down", "gg-chevron-up");
    }
    else if(visibility === "true")
    {
        platformsSublist.setAttribute("data-visible", "false");
        platformsButton.classList.replace("gg-chevron-up", "gg-chevron-down");
    }
})

//Reset changes
const mq2 = window.matchMedia("(width >= 1185px)");

function resetArrows(mql){
    if(mql.matches){
        platformsSublist.setAttribute("data-visible", "false");
        platformsButton.classList.replace("gg-chevron-up", "gg-chevron-down");

        genresSublist.setAttribute("data-visible", "false");
        genresButton.classList.replace("gg-chevron-up", "gg-chevron-down");
    }
}

mq2.addEventListener("change", resetArrows);

function resetNavBar(mql){
    if(mql.matches){
        let icon = document.querySelector("#slide_icon");
        
        navBarSlide.setAttribute("data-visible", "false");
        icon.classList.replace("gg-close", "gg-menu");
    }
}

mq2.addEventListener("change", resetNavBar);