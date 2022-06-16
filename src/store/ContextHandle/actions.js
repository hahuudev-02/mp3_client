export const playMusic = ({musicUrl, nameSong, audioElement}) => ({
    type: 'PLAY_MUCSIC',
    audioElement,
    musicUrl,
    nameSong,
});
export const NextMusic = (idSong, musicUrl, nameSong) => ({
    type: 'NEXT_MUCSIC',
    idSong,
    musicUrl,
    nameSong,
});
