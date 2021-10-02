import './Menu.scss'
import { NavLink, useLocation } from "react-router-dom";

function Menu(props) {
    const { pathname } = useLocation();

    const about = () => {
        alert('This is a react based music library Application!\n' +
            'For the Team Rockstars IT Tech Case!\n' +
            'Made by Jan-Willem van Bremen - 2021');
    }

    const closeMenuIfMobile = () => {
        if (window.innerWidth < 600) {
            document.getElementById('app').classList.remove('menu-active')
        }
    }

    return (
        <div className="menu">
            <div onClick={e => props.onMenuClick(e)} className="menu-close">✖</div>
            <h1>Menu</h1>
            <ul className="menu-top" onClick={() => closeMenuIfMobile()}>
                <li><NavLink to={'/'} isActive={ (match) => match.url === '/'}>Artists</NavLink></li>
                <li><NavLink to={'/songs'} isActive={() => pathname.includes('/songs')}>Songs</NavLink></li>
                <li onClick={about}>About</li>
            </ul>
            <p className="menu-bottom">Jan-Willem van Bremen</p>
        </div>
    );
}

export default Menu;
