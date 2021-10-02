import React, { useEffect, useState } from "react";
import Loader from "../../../lib/Loader";
import MusicService from "../../../lib/services/MusicService";
import { match } from "react-router-dom";
import SongCard from "../../SongCard/SongCard";
import ScrollToTopButton from "../../ScrollToTopButton/ScrollToTopButton";

function Genre(props: { match: match }) {
    const genreName = decodeURIComponent(props.match.params.genreName)
    const [songs, setSongs] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => { // Initial data fetch
        Loader.showLoader()
        MusicService.getSongsByGenreName(genreName).then(songs => {
            setSongs(songs)
            Loader.hideLoader()
        })

        return () => { setSongs([]) };
    }, [genreName])

    return (
        <div id={'genre'} className={'flex flex-wrap justify-between gap-2'}>
            <div className={'flex justify-between flex-wrap gap-4 mb-4 w-full'}>
                <h1>Genre: "{genreName}"</h1>
                <input className={'p-2 text-rockstar-grey'} placeholder={'Search songs! 🎵'} onChange={event => setQuery(event.target.value?.toLowerCase())}/>
            </div>
            <div className={'w-full'}>
                <h2>{songs?.filter(song => song.name.toLowerCase().includes(query)).length} Song{songs?.filter(song => song.name.toLowerCase().includes(query)).length !== 1 && 's'}:
                </h2>
            </div>
            {songs?.filter(song => song.name.toLowerCase().includes(query)).length ?
                songs?.filter(song => song.name.toLowerCase().includes(query)).map(song =>
                    <SongCard key={song.id} showArtist={true} song={song}/>) :
                <h3>No results...</h3>}
            {songs?.length > 50 && <ScrollToTopButton/>}
        </div>
    );
}

export default Genre;
