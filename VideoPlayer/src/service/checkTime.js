import { videoConfig } from "../config/video_config.js";

export function checkPlayingTime(time) {
    let resStr = '';
    if (time < videoConfig.minTime * 1000 || time > videoConfig.maxTime * 1000) {
        resStr = `Playing time must be in the range [${videoConfig.minTime} - ${videoConfig.maxTime}] `
    }
    return resStr;

}