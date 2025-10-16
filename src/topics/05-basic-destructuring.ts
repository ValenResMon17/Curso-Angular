interface AudioPlayer {
    AudioVolume: number,
    songDuration: number,
    song: string,
    details: Details,
}

interface Details {
    author: string,
    year: number,
}

const audioPlayer: AudioPlayer = {
    AudioVolume: 90,
    songDuration: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2015,
    }
}

const { song:anotherSong, AudioVolume:volume, songDuration:duration } = audioPlayer;
const { author:author, year:year } = audioPlayer.details;

console.log('Song', anotherSong + 'Volume', volume +'Duration', duration + 'Author', author + 'Year', year);

// const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
// const [ p1, p2, p3 ] = dbz;
// console.log('Personaje 1:', p1);
// console.log('Personaje 2:', p2);
// console.log('Personaje 3:', p3);

const [ , , p3t = 'Not Found' ]: string[] = ['Goku', 'Vegeta'];

console.log('Personaje 3:', p3t);


export {};