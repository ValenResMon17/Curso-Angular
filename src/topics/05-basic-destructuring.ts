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

console.log('Song', anotherSong);
console.log('Volume', volume);
console.log('Duration', duration);


console.log('Author', author);
console.log('Year', year);


export {};