import { DataForm } from "./ui/input-data-form.js";
import { VideoPlayer } from "./ui/video-player.js";
import { sleep } from "./utils/sleep.js";
import {checkPlayingTime} from './service/checkTime.js'

const data=new DataForm("video-form-section")
data.addHandler(aBitHigh)
const player= new VideoPlayer("video-section")





async function aBitHigh(time,url){
    if(checkPlayingTime(time)===''){
    player.setUrl(url)
    player.start()
    await sleep(time*1000)
    player.stop()
    return
    } 
    alert('shieet')
}


