

const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');

let songIndex = 0;

const songs = [
    
    {
        title: 'Emotional-orchestra',
        artist: 'Brotheration_Records', // You can update this with the actual artist name
        file: 'songs/emotional-orchestra-short-145091.mp3'  // Path to your song file
    },
    {
        title: 'Mysterious-sci-fi',
        artist: 'Lang Lang (Pianist)', // You can update this with the actual artist name
        file: 'songs/mysterious-sci-fi-30-sec-background-music-165790.mp3'  // Path to your song file
    },
    {
        title: 'Romantic Song',
        artist: 'Kadence_Music', // You can update this with the actual artist name
        file: 'songs/romance-202246.mp3'  // Path to your song file
    }
    ,
    {
        title: 'Stranger Intro.mp3',
        artist: 'Sonican', // You can update this with the actual artist name
        file: 'songs/stranger-intro-trap-beat-30-sec-165795.mp3'  // Path to your song file
    },{
        title: 'Backwards Morphing Tesseract',
        artist: 'MateuszPixabay', // You can update this with the actual artist name
        file: 'songs/backwards-morphing-tesseract-30sec-challenge-7430.mp3'  // Path to your song file
    }
    
];

function loadSong(song) {
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    audio.src = song.file;
}

function playSong() {
    audio.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>'; // Change icon to pause
}

function pauseSong() {
    audio.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>'; // Change icon to play
}

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

prevBtn.addEventListener('click', () => {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
});

nextBtn.addEventListener('click', () => {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
});

// Load the first song initially
loadSong(songs[songIndex]);
