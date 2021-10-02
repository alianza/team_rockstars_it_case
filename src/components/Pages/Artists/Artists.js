import './Artists.scss'
import React, { useEffect, useState } from "react";
import Loader from "../../../lib/Loader";
import MusicService from "../../../lib/services/MusicService";
import ArtistCard from "../../ArtistCard/ArtistCard";
import ScrollToTopButton from "../../ScrollToTopButton/ScrollToTopButton";

function Artists() {
    const [artists, setArtists] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => { // Initial data fetch
        Loader.showLoader()
        MusicService.getArtists().then(artists => {
            setArtists(artists)
            Loader.hideLoader()
        })

        return () => { setArtists([]) };
    }, [])

    return (
        <div id={'artists'} className={'flex flex-wrap justify-between gap-2'}>
            <div className={'flex justify-between flex-wrap gap-4 mb-4 w-full'}>
                <h1>All Artists</h1>
                <input className={'p-2 text-rockstar-grey'} placeholder={'Search artists! 👨‍🎤'} onChange={event => setQuery(event.target.value?.toLowerCase())}/>
            </div>

            {artists?.filter(artist => artist.name.toLowerCase().includes(query))?.length ?
                artists?.filter(artist => artist.name.toLowerCase().includes(query)).map(artist =>
                    <ArtistCard key={artist.id} artist={artist}/>) :
                <h3>No results...</h3>}
            {artists?.length > 50 && <ScrollToTopButton/>}
        </div>
    );
}

export default Artists;
