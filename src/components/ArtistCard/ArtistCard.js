import React from "react";
import { Link } from "react-router-dom";

function ArtistCard(props) {
    return (
        <Link to={`/artist/${encodeURIComponent(props.artist.name)}`}>
            <button className={'button text-secondary'}>{props.artist.name}</button>
        </Link>
    );
}

export default ArtistCard;
