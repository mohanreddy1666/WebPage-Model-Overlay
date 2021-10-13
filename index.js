const openModal = document.getElementById("open-modal")
const overlay = document.getElementById("overlay")
const closeModal = document.getElementById("close-modal")

openModal.addEventListener("click", function(){
    console.log(openModal);
    overlay.style.display = "block";
    //document.getElementById("overlay").style.display = "block";
})

closeModal.addEventListener("click", function(){
    console.log(openModal);
    overlay.style.display = "none";
    //document.getElementById("overlay").style.display = "none";
})