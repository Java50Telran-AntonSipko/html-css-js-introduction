export class VideoPlayer{
    #videoElement
    constructor(parentId){
       const parentElement=document.getElementById(parentId)
        parentElement.innerHTML = `<video id="video-player" src=" "></video>`
        this.#videoElement=document.querySelector("#video-player")
        
    }
    setUrl(url){
        this.#videoElement.src=url;
    }
    start(){
        this.#videoElement.play();
    }
    stop(){
        this.#videoElement.pause();
    }

}