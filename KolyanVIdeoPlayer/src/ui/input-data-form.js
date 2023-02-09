import { videoConfig } from "../config/video_config.js";


export class DataForm {
    #videosElement
    #inputElement 
    #formElement
    #videoRef
    constructor(parenId) {
        const parentFormElement = document.getElementById(parenId);
        if (!parentFormElement) {
            throw `Wrong parent ID ${parenId}`;
        }
        parentFormElement.innerHTML = `
        <form id="playingtime-form">
        <input required id="playingtime-form-input" type="number" placeholder="Enter the playing time in sec">
        <div class="form-selector">
        <label>Select Video</label>
        <select name="video" id="video">
        </select>
        </div>
        </form> `
        this.#formElement=document.getElementById("playingtime-form")
         document.getElementById("video").innerHTML= videoConfig.videoLinks.map((video, index) => `<option value="${video}">video${index + 1}</option>`)
        this.#inputElement = document.querySelector("#playingtime-form-input")
        this.#videoRef = document.querySelector("#video")








    }
   
    addHandler(handlerFun) {
        this.#formElement.addEventListener("submit", async (event) =>{
            event.preventDefault();
            
            await handlerFun(this.#inputElement.value,this.#videoRef.value)
        })


    }



}