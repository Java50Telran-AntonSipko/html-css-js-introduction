import { checkPlayingTime } from "./service/checkTime.js";
import { DataForm } from "./ui/input-data-form.js";
import { VideoPlayer } from "./ui/video-player.js";
import { sleep } from "./utils/sleep.js";
const data=new DataForm("video-form-section")
data.addHandler(handlerFun);
const player= new VideoPlayer("video-section")
async function  handlerFun(videoData){
    if(checkPlayingTime(+videoData.time)===""){
        player.setUrl(videoData.videoRef)
        player.start()
        await sleep(+(videoData.time)*1000)
        player.stop
        
    }else{
        alert(`${checkPlayingTime(+videoData.time)}`)

    }
   



}


