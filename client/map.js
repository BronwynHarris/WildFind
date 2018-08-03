const mapboxgl = require('mapbox-gl');
const d3 = require('d3');
const data = require('./oneMonthEagle.csv')

mapboxgl.accessToken =
    'pk.eyJ1IjoiYnJvbnd5bmgiLCJhIjoiY2ppbjliM3RoMDF2cTNwbHhhYWpxaDA4aSJ9.Ck-5IjFlQeo_sEhv1g70vA'

const centerCoords = [-73.9513, 40.7385]


var map = new mapboxgl.Map({
	container: 'map', // container id
	style: 'mapbox://styles/bronwynh/cjkd65cbg0def2so5mcal3rsn',
	center: centerCoords,
	zoom: 5,
	interactive: false,
	pitch: 0
});
map.scrollZoom.disable();

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



