import React from 'react';
import SongItem from './SongItem';
import { useState } from 'react';

const SongList = ({ songsArray }) => {
    const [items, setItems] = useState(5);
    console.log(items);

    return (
        <div className="song-list">

            {/* Filter all musics by atists */}
            {/* {songsArray.map((currentSongObject, index) => (
                <SongItem {...currentSongObject} index={index} key={index}/>
            ))} */}

            {/* Filter 5 musics by artists */}
            {songsArray
                .filter((currentValue, index) => index < items)
                .map((currentSongObject, index) => (
                    <SongItem {...currentSongObject} index={index} key={index} />
                ))
            }

            <p className="song-list__see-more" onClick={() => {setItems(items + 5)}}> View More </p>
        </div>
    )
}

export default SongList;