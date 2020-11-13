let map;
const url_base = 'https://transportapi.com/v3/uk/';
const url_app_data = 'app_id=43f80deb&app_key=6dd04908e07981301199d3a9bb89eee6';

const getLocalStops = async ({ lat, long }) => {
  const url_specific = 'places.json?';
  const latLong = `lat=${lat}&lon=${long}`;
  const types = '&type=train_station,bus_stop&';

  const fullUrl = url_base + url_specific + latLong + types + url_app_data;

  const response = await fetch(fullUrl);
  return response.json();
};

const getBusDepartures = async (atcocode) => {
  const url_specific = 'bus/stop/';

  const response = await fetch(
    url_base + url_specific + atcocode + '/live.json?' + url_app_data
  );
  return response.json();
};

const getTrainDepartures = async (station_code) => {
  const url_specific = 'train/station/';

  const response = await fetch(
    url_base + url_specific + station_code + '/live.json?' + url_app_data
  );
  return response.json();
};

const busDeparturesTable = (departures) => {
  const buses = Object.keys(departures);

  buses.sort((a, b) => a.localeCompare(b));

  let text = `
  <table class="bus-list">
    <thead>
      <tr>
        <th class="bus">Bus</th>
        <th class="destination">Destination</th>
        <th class="time">Time</th>
      </tr>
    </thead>
    <tbody>\n`;

  buses.forEach((key) => {
    departures[key].forEach(
      ({
        line_name,
        direction,
        aimed_departure_time,
        best_departure_estimate,
      }) => {
        let time = aimed_departure_time;
        if (aimed_departure_time !== best_departure_estimate)
          time = 'delayed: ' + best_departure_estimate;

        text += `
        <tr>
          <td>${line_name}</td>
          <td>${direction}</td>
          <td>${time}</td>
        </tr>\n`;
      }
    );
  });

  return text + '</tbody>\n</table>\n';
};

// Platform is omitted, since it doesn't get set for my local station
const trainDeparturesTable = (departures) => {
  let text = `
  <table class="train-list">
    <thead>
      <tr>
      <th class="destination">Destination</th>
      <th class="time">Time</th>
      <th class="status">Status</th>
      </tr>
    </thead>
    <tbody>\n`;

  departures.forEach((train) => {
    // const platform = train.platform || ' ';
    const expected_time = train.expected_departure_time;

    text += `
    <tr>
      <td>${train.destination_name}</td>
      <td>${expected_time}</td>
      <td>${train.status}</td>
    </tr>\n`;
  });

  return text + '</tbody>\n</table>\n';
};

const addMarker = (loc) => {
  const stop = new google.maps.InfoWindow({
    content: `${loc.name}/${loc.atcocode || ''}/${loc.station_code || ''}`,
  });

  const marker = new google.maps.Marker({
    map,
    title: loc.name,
    position: { lat: loc.latitude, lng: loc.longitude },
  });

  marker.addListener('click', async () => {
    const [name, atcocode, station_code] = stop.getContent().split('/');

    stop.setContent('Loading...');
    stop.open(map, marker);

    try {
      let content = `<h2>${name}</h2>`;

      if (atcocode) {
        const { departures } = await getBusDepartures(atcocode);

        if (Object.keys(departures).length > 0) {
          content += busDeparturesTable(departures);
        } else content += '<h2>No scheduled departures</h2>';

        stop.close();
        document.querySelector('#departure-info').innerHTML = content;
      } else if (station_code) {
        const { departures } = await getTrainDepartures(station_code);

        if (departures.all.length > 0) {
          content += trainDeparturesTable(departures.all);
        } else content += '<h2>No scheduled departures</h2>';

        stop.close();
        document.querySelector('#departure-info').innerHTML = content;
      } else {
        console.log('Neither:', name, atcocode, station_code);
      }
    } catch (err) {
      console.error(err);
      stop.setContent(`Error: ${err.message}`);
    }
  });
};

const addMarkers = (locations) => {
  locations.member.filter(({ distance }) => distance <= 1600).forEach(addMarker);
};

const addStops = (position) => {
  getLocalStops({
    lat: position.coords.latitude,
    long: position.coords.longitude,
  })
    .then(addMarkers)
    .catch((err) => console.error(err));
};

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 50.729, lng: -1.818 },
    zoom: 16,
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        map.setCenter(pos);

        addStops(position);
      },
      (err) => handleLocationError(true, err),
      { enableHighAccuracy: true }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, null);
  }
}

function handleLocationError(browserHasGeolocation, err) {
  console.error(
    browserHasGeolocation
      ? 'There was a problem with the Geolocation service.'
      : "Your browser doesn't support geolocation.",
    err
  );
}
