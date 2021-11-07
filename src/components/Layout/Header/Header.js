import './Header.scss'

function Header(props) {

    return (
        <header className="header">
            <div className="left">
                <div onClick={e => props.onMenuClick(e)} className="menu-icon">
                    <div/>
                    <div/>
                    <div/>
                </div>
                <h1 className="header-title">{props.title}</h1>
            </div>
            <div className="header-status">

            </div>
        </header>
    );
}

export default Header;
