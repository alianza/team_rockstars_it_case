import React, { useEffect, useState } from "react";
import Loader from "../../../lib/Loader";
import MusicService from "../../../lib/services/MusicService";
import { match } from "react-router-dom";
import SongCard from "../../SongCard/SongCard";

function Artist(props: { match: match }) {
    const artistName = decodeURIComponent(props.match.params.artistName)
    const [songs, setSongs] = useState([])

    useEffect(() => { // Initial data fetch
        Loader.showLoader()
        MusicService.getSongsByArtistName(artistName).then(songs => {
            setSongs(songs)
            Loader.hideLoader()
        })
    }, [artistName])

    return (
        <div id={'artist'} className={'flex flex-wrap justify-between gap-2'}>
            <div className={'w-full'}>
                <h1 className={'mb-4'}>Artist: "{artistName}"</h1>
                <h2>{songs?.length} Song{songs?.length !== 1 && 's'}{songs?.length !== 0 && ':'}</h2>
            </div>
            {songs && songs.map(song => <SongCard key={song.id} song={song}/> )}
        </div>
    );
}

export default Artist;
