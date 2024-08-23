mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // The ID of the container element
  style: "mapbox://styles/mapbox/satellite-v8", // The style of the map
  zoom: 13, // Initial zoom level
  center: coordinates, // Coordinates for the map's center [longitude, latitude]
});

// Optional: Add a marker at the center of the map
new mapboxgl.Marker()
  .setLngLat(coordinates)
  .addTo(map);

// Optional: Add navigation controls to the map (zoom and rotation controls)
map.addControl(new mapboxgl.NavigationControl());

// Optional: Add a popup to the marker
const popup = new mapboxgl.Popup({ offset: 25 }).setText(
  `Location: ${coordinates[1]}, ${coordinates[0]} Your Airbnb is Here Enjoy!`
);

new mapboxgl.Marker()
  .setLngLat(coordinates)
  .setPopup(popup) // sets a popup on this marker
  .addTo(map);


