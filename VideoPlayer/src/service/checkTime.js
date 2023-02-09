import { videoConfig } from "../config/video_config.js";

export function checkPlayingTime(time) {
    let resStr = '';
    if (time < videoConfig.minTime  || time > videoConfig.maxTime) {
        resStr = `Playing time must be in the range [${videoConfig.minTime} - ${videoConfig.maxTime}] `
    }
    return resStr;

}