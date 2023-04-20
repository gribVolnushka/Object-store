const musicLibrary = {
    songs: [],

    addSong: function(title, artist, year) {
        const song = {
            title: title,
            artist: artist,
            year: year,
        };
        this.songs.push(song);
    },

    getSongsByYear: function(year) {
        return this.songs.filter(song => song.year === year);
    },

    getSongsByArtist: function(artistName) {
        const formattedArtistName = artistName.toLowerCase();
        return this.songs.filter(song => song.artist.toLowerCase() === formattedArtistName);
    },

    getSongsByYears: function(years) {
        return this.songs.filter(song => years.includes(song.year));
    },

    getSongsByArtists: function(artistNames) {
        const formattedArtistNames = artistNames.map(name => name.toLowerCase());
        return this.songs.filter(song => formattedArtistNames.includes(song.artist.toLowerCase()));
    }
};



