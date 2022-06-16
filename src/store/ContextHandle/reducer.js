import { dataSongs } from 'api/initdata/initdata';

const musicTest = dataSongs.musics.songs[0];

export const initState = {
    songId: musicTest.id,
    musicUrl: musicTest.musicUrl,
    nameSong: musicTest.nameSong,
};

export default function reducer(state, action) {
    switch (action.type) {
        case 'PLAY_MUCSIC':
            console.log(action.audioElement);
            return {
                musicUrl: action.musicUrl,
                nameSong: action.nameSong,
            };
        case 'NEXT_MUCSIC':
            const songIdNumber = Number(action.idSong.replace(/[^0-9]/g, '')) ;
            const song = dataSongs.musics.songs.find((song) => songIdNumber + 1 == song.id.replace(/[^0-9]/g, ''))
            return {
                songId: songIdNumber,
                musicUrl: song.musicUrl,
                nameSong: song.nameSong,
            };

        default:
            throw new Error(`Invalid action ${action.type}`);
    }
}
