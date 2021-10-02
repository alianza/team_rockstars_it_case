import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Menu from "./components/Layout/Menu/Menu";
import { useState } from "react";
import useTheme from "./lib/Theme";
import { useEventListeners } from "./lib/EventListeners";
import localStorageService from "./lib/services/localStorageService";
import Footer from "./components/Layout/Footer/Footer";
import Loader from "./components/Loader/Loader";
import Artists from "./components/Pages/Artists/Artists";
import Artist from "./components/Pages/Artist/Artist";
import Genre from "./components/Pages/Genre/Genre";
import Songs from "./components/Pages/Songs/Songs";
import NotFound from "./components/Pages/NotFound/NotFound";

const darkThemeKey = 'darkTheme';

function App() {
  const [darkTheme, setDarkTheme] = useState(localStorageService.getValue(darkThemeKey))

  useTheme(darkTheme)

  useEventListeners()

  const toggleMenu = () => { document.getElementById("app").classList.toggle("menu-active") }

  const toggleTheme = () => { localStorageService.setKeyValue(darkThemeKey, !darkTheme); setDarkTheme(prevTheme => !prevTheme) }

  return (
      <Router>
        <div id="app">

          <Header onMenuClick={toggleMenu} title={'Rockstars IT!'}/>

          <Menu onMenuClick={toggleMenu}/>

          <div className={'content'}>
            <Switch>
              <Route exact path={['/']} render={({match}) =>
                  <Artists match={match}/>}/>

              <Route exact path={['/artist/:artistName']} render={({match}) =>
                  <Artist match={match}/>}/>

              <Route exact path={['/songs']} render={({match}) =>
                  <Songs match={match}/>}/>

              <Route exact path={['/genre/:genreName']} render={({match}) =>
                  <Genre match={match}/>}/>

              <Route render={() => <NotFound/>}/>
            </Switch>
          </div>

          <Footer darkTheme={darkTheme} onThemeButtonClick={toggleTheme}/>

          <Loader/>

        </div>
      </Router>
  );
}

export default App;
