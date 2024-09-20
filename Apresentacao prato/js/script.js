function handlePopup() {
    const popupButtons =document.querySelectorAll(".btn-action, .close-popup");
    const popup = document.querySelector(".popup");

    popupButtons.forEach(item =>{
        item.addEventListener('click', () =>{
        popup.classList.toggle('is--active');
        })
    });

};

document.addEventListener("DOMContentLoaded",()=>{
    handlePopup();
});

