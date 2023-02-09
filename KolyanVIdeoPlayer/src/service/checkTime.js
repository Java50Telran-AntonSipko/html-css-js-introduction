import { videoConfig } from "../config/video_config.js";

export function checkPlayingTime(playingTime) {
    let resStr = '';
    if (playingTime*1000 < videoConfig.minTime * 1000 || playingTime*1000 > videoConfig.maxTime * 1000) {
        resStr = `Playing time must be in the range ${videoConfig.minTime} - ${videoConfig.maxTime} `
    }
    return resStr;

}