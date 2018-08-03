// const mapboxgl = require('mapbox-gl');
// const d3 = require('d3');
// const data = require('../public/oneMonthEagle.json')

// mapboxgl.accessToken =
//     'pk.eyJ1IjoiYnJvbnd5bmgiLCJhIjoiY2ppbjliM3RoMDF2cTNwbHhhYWpxaDA4aSJ9.Ck-5IjFlQeo_sEhv1g70vA'

// const centerCoords = [-73.9513, 40.7385]


// var map = new mapboxgl.Map({
// 	container: 'map', // container id
// 	style: 'mapbox://styles/mapbox/streets-v10',
// 	center: centerCoords,
// 	zoom: 5,
// 	interactive: false,
// 	pitch: 0
// });
// map.scrollZoom.disable();

// const state = {
// 	'individual-local-identifier': '',
// 	simulationSpeed: 1
// };

// function setColor(d) {
// 	if (state["individual-local-identifier"]) {
// 		if (d["individual-local-identifier"] === 'Haliae') {
// 			return {
// 				fill: '#cc0000',
// 				stroke: '#ad0000'
// 			};
// 		} else if (d.["individual-local-identifier"] === 'Harmony 2') {
// 			return {
// 				fill: '#0479a0',
// 				stroke: '#035e7c'
// 			};
// 		} else {
// 			return {
// 				fill: 'black',
// 				stroke: 'black'
// 			};
// 		}
// }

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import InitialState from './init_state';

console.log('store created');
ReactDOM.render(
  <Provider store={ createStore(reducers, InitialState) }>
    <App />
  </Provider>,
  document.querySelector('#map')
);


