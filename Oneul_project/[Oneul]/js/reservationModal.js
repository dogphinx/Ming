const openButton = document.getElementById("open"),
    modal = document.querySelector(".modal"),
    overlay = modal.querySelector(".modal_overlay"),
    closeBtn = modal.querySelector("button");

const openModal = () => {
    modal.classList.remove("hidden")
}

const closeModal = () => {
    modal.classList.add("hidden")
}

overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);
openButton.addEventListener("click", openModal);
mainGnbLi[5].addEventListener("click", openModal);
iconMenuLi[5].addEventListener("click", openModal);