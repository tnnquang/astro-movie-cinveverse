// CineVerse Player Store
import { map } from 'nanostores';

export const $playerState = map({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 1,
    isMuted: false,
    isFullscreen: false,
    quality: 'auto',
    playbackRate: 1,
});

export function setPlaying(isPlaying: boolean) {
    $playerState.setKey('isPlaying', isPlaying);
}

export function setCurrentTime(time: number) {
    $playerState.setKey('currentTime', time);
}

export function setDuration(duration: number) {
    $playerState.setKey('duration', duration);
}

export function setVolume(volume: number) {
    $playerState.setKey('volume', Math.max(0, Math.min(1, volume)));
}

export function setMuted(isMuted: boolean) {
    $playerState.setKey('isMuted', isMuted);
}

export function toggleMute() {
    $playerState.setKey('isMuted', !$playerState.get().isMuted);
}

export function setFullscreen(isFullscreen: boolean) {
    $playerState.setKey('isFullscreen', isFullscreen);
}

export function setQuality(quality: string) {
    $playerState.setKey('quality', quality);
}

export function setPlaybackRate(rate: number) {
    $playerState.setKey('playbackRate', rate);
}
