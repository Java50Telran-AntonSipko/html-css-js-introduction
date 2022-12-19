const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const anchorElements = document.querySelectorAll(".thumbnails-anchor")
const mainElement=document.querySelector("main")
const detailsContainer=document.querySelector(".details-container")
const detailsAudio=document.getElementById("audio");
function setDetails(anchor) {
    const dataImage = anchor.getAttribute("data-details-image");
    detailsImage.src = dataImage;
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
    const dataAudio=anchor.getAttribute("data-details-audio")
    detailsAudio.src=dataAudio;
    showDetails();

}
for (let i = 0; i < anchorElements.length; i++) {
    anchorElements[i].addEventListener("click", function() {
        setDetails(anchorElements[i]);
    })
}
const HIDDEN="hidden"
const IS_POINT="is-point"
function hideDetails(){
    mainElement.classList.add(HIDDEN);

}
function showDetails() {
    mainElement.classList.remove(HIDDEN);
    detailsContainer.classList.add(IS_POINT);
    setTimeout(function() {
        detailsContainer.classList.remove(IS_POINT);
    })

}
function play(){
    let audio=document.getElementById("audio");
    audio.play();

}
for (let i = 0; i < anchorElements.length; i++) {
    anchorElements[i].addEventListener("click", function() {
        play(anchorElements[i]);
    })
}
