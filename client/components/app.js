// import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import ReactMap from './ReactMap';
import Interface from './Interface';

const TOKEN = 'pk.eyJ1IjoiYnJvbnd5bmgiLCJhIjoiY2ppbjliM3RoMDF2cTNwbHhhYWpxaDA4aSJ9.Ck-5IjFlQeo_sEhv1g70vA';
const LONG = 40.7385;
const LAT = -73.9513;
const ZOOM = 5;
// const STYLE_ID = 'ryantm/cj8m5f0136ll12sk7nm8dj00k';
const STYLE_ID = 'mapbox://styles/bronwynh/cjkd65cbg0def2so5mcal3rsn';

export default class App extends Component {

  render() {
    return (
      <div>
        <Interface />
        <ReactMap
          token= { TOKEN }
          longitude= { LONG }
          latitude= { LAT }
          zoom= { ZOOM }
          showPopUp= { true }
          styleID = { STYLE_ID }
        />
      </div>
    );
  }
}