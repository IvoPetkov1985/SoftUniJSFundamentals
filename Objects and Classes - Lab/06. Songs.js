function songs(inputArray) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songsCount = Number(inputArray.shift());
    let type = inputArray.pop();
    let playlist = [];

    for (let songInfo of inputArray) {
        let songTokens = songInfo.split("_");
        let listType = songTokens[0];
        let songName = songTokens[1];
        let songDuration = songTokens[2];
        let currentSong = new Song(listType, songName, songDuration);
        playlist.push(currentSong);
    }

    if (type === "all") {
        playlist.forEach(s => console.log(s.name));
    } else {
        let filteredArrayOfSongs = playlist.filter(s => s.typeList === type);
        filteredArrayOfSongs.forEach(s => console.log(s.name));
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
);

function songs2(array) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songsCount = Number(array.shift());
    let searchedType = array.pop();
    let playlist = [];

    for (let i = 0; i < songsCount; i++) {
        let [listType, songName, songDuration] = array[i].split("_");
        let song = new Song(listType, songName, songDuration);
        playlist.push(song);
    }

    if (searchedType === "all") {
        playlist.forEach(s => console.log(s.name));
    } else {
        let filteredSongs = playlist.filter(s => s.typeList === searchedType);
        filteredSongs.forEach(s => console.log(s.name));
    }
}

songs2([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);

songs2([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);

songs2([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
);