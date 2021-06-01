const familySite = document.getElementsByClassName("family_site")[0]


function familySiteButton() {
    if (familySite.classList.contains("family_site_on") === true) {
        familySite.classList.remove("family_site_on");
        familySite.children[0].children[0].classList.remove("rotate_arrow");
    } else {
        familySite.classList.add("family_site_on");
        familySite.children[0].children[0].classList.add("rotate_arrow");
    }
}


familySite.children[0].addEventListener("click", familySiteButton);