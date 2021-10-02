import React, { useEffect, useState } from "react";
import Loader from "../../../lib/Loader";
import MusicService from "../../../lib/services/MusicService";
import SongCard from "../../SongCard/SongCard";
import ScrollToTopButton from "../../ScrollToTopButton/ScrollToTopButton";

function Songs() {
    const [songs, setSongs] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => { // Initial data fetch
        Loader.showLoader()
        MusicService.getSongs().then(songs => {
            setSongs(songs)
            Loader.hideLoader()
        })

        return () => { setSongs([]) };
    }, [])

    return (
        <div id={'songs'} className={'flex flex-wrap justify-between gap-2'}>
            <div className={'flex justify-between flex-wrap gap-4 mb-4 w-full'}>
                <h1>All Songs</h1>
                <input className={'p-2 text-rockstar-grey'} placeholder={'Search songs! 🎵'} onChange={event => setQuery(event.target.value?.toLowerCase())}/>
            </div>

            {songs?.filter(song => song.name.toLowerCase().includes(query)).length ?
                songs?.filter(song => song.name.toLowerCase().includes(query)).map(song =>
                    <SongCard showArtist={true} key={song.id} song={song}/>) :
                <h3>No results...</h3>}
            {songs?.length > 50 && <ScrollToTopButton/>}
        </div>
    );
}

export default Songs;
