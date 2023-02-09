import { videoConfig } from "../config/video_config.js";

export class DataForm {
    #videosElement
    #inputElements
    #formElement

    constructor(parenId) {
        const parentFormElement = document.getElementById(parenId);
        if (!parentFormElement) {
            throw `Wrong parent ID ${parenId}`;
        }
        parentFormElement.innerHTML = `
        <form id="video-form">
        <input  name="time" type="number" placeholder="Enter the playing time in sec" class="form-input">
        <div class="form-selector">
        <label>Select Video</label>
        <select name="videoRef" id="video" class="form-select">
        <option value="aaa"></option>
        </select>
        </div>
        </form> `
        this.#formElement=document.getElementById("video-form")
        this.#inputElements = document.querySelectorAll("#video-form [name]")
        this.#videosElement = document.getElementById("video");
        this.setVideos();








    }
    setVideos() {
        this.#videosElement.innerHTML = videoConfig.videoLinks.map((video, index) => `<option value="${video}">video${index + 1}</option>`)
    }
    addHandler(handlerFun) {
        this.#formElement.addEventListener("submit", async (event) =>{
            event.preventDefault();
            const videoData=Array.from(this.#inputElements).reduce((res,element)=>{
                res[element.name]=element.value;
                return res;
             },{})
             
            await handlerFun(videoData)
             

        })


    }



}