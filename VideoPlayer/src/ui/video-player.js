export class VideoPlayer{
    #videoElement
    constructor(parentId){
       const parentElement=document.getElementById(parentId)
        parentElement.innerHTML = `<video id="video" src=" "></video>`
        this.#videoElement=document.querySelector("video")
        
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