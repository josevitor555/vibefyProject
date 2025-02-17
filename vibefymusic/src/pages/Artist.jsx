import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useParams } from "react-router-dom";
import SongList from "../components/SongList"

import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Artist = () => {
    // const { pathname } = useLocation();
    const { id } = useParams();
    // console.log(pathname);
    // console.log(useParams());
    // console.log(artistArray.filter((currentArtistObject, index) => currentArtistObject.id === Number(id)));

    // console.log(
    //     artistArray.filter(
    //         (currentArtistObject, index) => currentArtistObject.id === Number(id)
    //     )[0]
    // );

    // Filter Artist
    const {name, banner} =  artistArray.filter((currentArtistObject, index) => currentArtistObject._id === id)[0];

    // Filter Songs
    const songsArrayFromArtist = songsArray.filter((currentSongstObject) => currentSongstObject.artist === name);
    console.log(songsArrayFromArtist);

    const randomIndex = Math.floor(Math.random() * (songsArrayFromArtist.length - 1));
    const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;
    console.log(randomIdFromArtist);

    // const randomIdFromArtist = Math.floor(Math.random() * (songsArrayFromArtist.length - 1));
    // console.log(`Tamanho do Array: ${songsArrayFromArtist.length}`);

    return (
        <div className="artist">
            <div className="artist">
                <div className="artist__header" style={{
                    backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${banner})`}}>
                        <div className="artist__title"> {name} </div>
                    </div>
                <div className="artist__body">
                    <h2> Popular Songs </h2>

                    <SongList songsArray={songsArrayFromArtist}/>
                </div>
            </div>
            <Link to={`/song/${randomIdFromArtist}`}>
                <FontAwesomeIcon className="single-item__icon single-item__icon--artist" icon={faCirclePlay} />
            </Link>
        </div>
    )
}

export default Artist;