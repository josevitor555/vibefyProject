import { artistArray } from "../../vibefymusic/src/assets/database/artists";
import { songsArray } from "../../vibefymusic/src/assets/database/songs";

// Import Database
import { db } from "./connect.js"

const newArtistArray = artistArray.map((currentArtistObject) => {
    const newArtistObj = {...currentArtistObject};
    delete newArtistObj.id;

    return newArtistObj; // Return no ID
});

const newSongstArray = songsArray.map((currentSongstObject) => {
    const newSongsObj = {...currentSongstObject};
    delete newSongsObj.id;

    return newSongsObj; // Return no ID
});

const songsResponse = await db.collection("songs").insertMany(newSongstArray);
const artistsResponse = await db.collection("artists").insertMany(newArtistArray);

console.log(songsResponse);
console.log(artistsResponse);