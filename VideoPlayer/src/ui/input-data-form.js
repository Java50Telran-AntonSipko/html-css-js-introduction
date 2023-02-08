import { videoConfig } from "../config/video_config.js";

export class DataForm {
    #videosElement
    #inputElement
    #formElement

    constructor(parenId) {
        const parentFormElement = document.getElementById(parenId);
        if (!parentFormElement) {
            throw `Wrong parent ID ${parenId}`;
        }
        parentFormElement.innerHTML = `
        <form id="playingtime-form">
        <input required name="playingtime" type="number" placeholder="Enter the playing time in sec" class="form-input">
        <div class="form-selector">
        <label>Select Video</label>
        <select name="video" id="video" class="form-select">
        <option value="aaa"></option>
        </select>
        </div>
        </form> `
        this.#formElement=document.getElementById("playingtime-form")
        this.#inputElement = document.querySelector("#playingtime-form[name]")
        this.#videosElement = document.getElementById("video");
        this.setVideos();








    }
    setVideos() {
        this.#videosElement.innerHTML = videoConfig.videoLinks.map((video, index) => `<option value="${video}">video${index + 1}</option>`)
    }
    addHandler(handlerFun) {
        this.#formElement.addEventListener("submit", async (event) =>{
            event.preventDefault();
            const playingTimeData={playingtime:this.#inputElement.value}
            await handlerFun(playingTimeData)

        })


    }



}