import './Footer.scss'
import React from "react";
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Brightness7Icon from '@material-ui/icons/Brightness7';

function Footer(props) {
    return (
        <div className="footer">
            <p>Team Rockstars IT Tech Case - Music App</p>
                <button className="button yellow" aria-label="Switch theme" onClick={() => props.onThemeButtonClick()}>{props.darkTheme ? <Brightness7Icon/> : <NightsStayIcon/>}</button>
        </div>
    );
}

export default Footer;
