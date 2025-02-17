import axios from "axios";

const URL = "http://localhost:3001";

// Get request from axios - Return a promise.
const responseArtist = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtist.data;
export const songsArray = responseSongs.data;
// console.log(responseArtist.data);