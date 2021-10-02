# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn start-json-server`

Starts the json-server with song and artist resources fed as db.json file.

### `yarn serve`

Serves the latest build in the `build` folder.\
Used for running cypress tests against.

### `yarn jest-test`

Launches the jest test runner in the interactive watch mode.

### `yarn cypress-test`

Launches the cypress test runner. 
Make sure to serve the application using the `serve` command and start the json-server using the `start-json-server` command!

### `yarn cypress-open`

Open the cypress e2e testing environment. 
Make sure to serve the application using the serve command and start the json-server using the start-json-server command!

## Tech stack

The application is built using the React front-end web framework together with Sass, TailwindCSS and Material UI Icons.
For backend communication the JavaScript fetch API has been used.
The Jest testing setup is built using Jest with React-testing-library and mock-service-worker.
The Cypress testing setup is built using Cypress with cypress-testing-library.

# Tech Screening Team Rockstars IT

Tech screening opdracht voor het Team Rockstars IT sollicitatieproces.

## Geïmplementeerde Requirements

1. De webapplicatie moet in de huisstijl van Team Rockstars IT zijn en uiteraard goed op een mobiel apparaat werken.
2. Een IT Rockstar kan een overzicht van alle artiesten inzien. Met een zoekbalk kan de IT Rockstar snel zijn favoriete artiest vinden.
3. Een IT Rockstar kan een artiest detail pagina met alle nummers van de artiest opvragen.

## Focus

* Duidelijke documentatie in de vorm van een readme van hoe de app werkt en gestart kan worden.
* Wordt er op een juiste wijze gebruik gemaakt van een framework of library zoals Angular, AngularJS, React, Vue, jQuery of een ander framework naar keuze.
* Code style
* Performance
* Huisstijl en opbouw (S)CSS
* We verwachten geen code coverage van 100%. Acht tot tien unit tests en enkele e-2-e tests zijn voldoende
* Genereren van file bundles door middel van een build tool
* Gebruik een UI-Kit om jouw spaarzame tijd goed te besteden

## Extra

1. **Responsive applicatie**

   Zorg dat de applicatie er op mobiel, tablet en desktop netjes uitziet. Je mag fluid design gebruiken of breakpoints.

2. **Vang onbekende urls af in routing**

   Zorg dat het navigeren naar een onbekende pagina in je applicatie netjes wordt afgevangen. Je mag zelf invullen welke informatie erop getoond wordt

3. **Gebruik een grid systeem**

   Zoals flexbox, CSS grid, 8-point-grid of een eigen opgezet grid-systeem.

4. **Nette error afhandeling backend calls**

   Zorg dat een error vanuit een backend call netjes wordt afgevangen en teruggekoppelt naar de gebruiker. Hoe dit eruit ziet in de app, mag je zelf bepalen (alert, pop-up, etc).

5. **Voeg een button animatie toe**

   Op click, hover of focus: laat de button iets doen. Geanimeerd met CSS.

6. **Gebruik een CSS preprocessor**

   Implementeer een preprocessor, zoals SASS/LESS en schrijf je styling in deze taal

7. **Implementeer design patterns**

   Zorg dat je mappenstructuur en bestanden design patterns reflecteren. De indeling en architectuur van je bestanden, styling, componenten etc.

8. **Koppel de nummers met Spotify**

   Zorg dat er een soort van koppeling is tussen de nummers en Spotify. In de aangeleverde database data staat een Spotify trackID die je kunt gebruiken. 
   Link naar de Spotify WEB API: https://developer.spotify.com/documentation/web-api Maak een developer account aan met een Spotify free account.

9. **Progressieve web-applicatie (zelf bedacht)**\
   Maak er een PWA van!


## Rules

* Je mag maximaal 4 uur van jouw kostbare tijd aan de casus spenderen. Op deze wijze krijgen wij het meest realistische beeld van jouw skills, vaardigheden en snelheid.
* Het is overigens geen schande als je het binnen deze tijd niet ‘af’ krijgt!
* Kwaliteit is in deze beter dan kwantiteit, dus zorg dat hetgene dat af is ook goed is.
* De applicatie moet met simpele commando’s te runnen zijn en voorzien zijn van duidelijke instructies hoe dit te doen.
* Je levert de solution minimaal 48 uur van te voren aan bij iemand van de techboard.
* De gegevens van de techboarder worden verstrekt door de Agent die jouw kwalificatietraject begeleidt.
* Na het gesprek volgt er een definitieve GO / NO GO vanuit de Rockstar! Bij een GO ontvang je binnen 48 uur een contractvoorstel vanuit jouw Agent!

Jan-Willem van Bremen
