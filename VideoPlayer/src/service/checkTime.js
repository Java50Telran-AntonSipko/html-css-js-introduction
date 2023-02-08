import { videoConfig } from "../config/video_config";

export function checkPlayingTime(playingTime) {
    let resStr = '';
    if (playingTime.playingtime < videoConfig.minTime * 100 || playingTime.playingtime > videoConfig.maxTime * 100) {
        resStr = `Playing time must be in the range [${videoConfig.minTime} - ${videoConfig.maxTime}] `
    }
    return resStr;

}