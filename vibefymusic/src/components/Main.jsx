import React from 'react';
import ItemList from './ItemList';
import { artistArray } from "../assets/database/artists.js";
import { songsArray } from "../assets/database/songs.js";

const Main = ({ type }) => {
    return  (
        <div className="main">
            {/* Item List dos Artistas */}
            {type == "artists" || type == undefined ? (
                <ItemList
                    title="Artists"
                    items={10}
                    itemsArray={artistArray}
                    path="/artists"
                    idPath="/artist"
                />
            ) : (
                <></>
            )}

            {/* Item List das Músicas */}
            {type == "songs" || type == undefined ? (
                <ItemList
                    title="Musics"
                    items={20}
                    itemsArray={songsArray}
                    path="/songs"
                    idPath="/song"
                />
            ): (
                <></>
            )}
        </div>
    );
};

export default Main;