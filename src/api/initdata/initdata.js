import clt from './data/clt cô.jpg';
import ekgh from './data/Em Khác Gì Hoa - Lil Zpoet _ Lyrics Video.mp3';
import hg from './data/Hạc Giấy - Yến Napun x Ciray _ Ngày Mai Nếu Lúc Thức Dậy Và Em Thấy Anh Bên Cạnh Remix Hot Tik Tok.mp3';

export const dataSongs = {
    musics: {
        id: 'music',
        songOrder: ['song-1', 'song-2', 'song-3'],
        songs: [
            {
                id: 'song-1',
                musicId: 'music',
                nameSong: 'Lạc Trôi',
                authorId: 'author-1',
                imgSongs: clt,
                musicUrl: ekgh,
            },
            {
                id: 'song-2',
                musicId: 'music',
                nameSong: 'Hãy trao cho anh nguyeyecxn hà huu',
                authorId: 'author-1',
                imgSongs: '',
                musicUrl: hg,
            },
            {
                id: 'song-3',
                musicId: 'music',
                nameSong: 'Hãy trao cho anh',
                authorId: 'author-1',
                imgSongs: '',
                musicUrl: ekgh,
            },
            {
                id: 'song-4',
                musicId: 'music',
                nameSong: 'Hãy trao cho anh',
                authorId: 'author-1',
                imgSongs: '',
                musicUrl: hg,
            },
        ],
    },
};
