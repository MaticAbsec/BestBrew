import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
//import { useMap } from 'react-leaflet/hooks'
import axios from 'axios';
import '../App.css'
import "../styles/map.css";

import L from "leaflet";

import { motion } from 'framer-motion';

function Icon(_iconSize) {

  return L.icon({
    iconUrl: require("../components/Slike/beermarker5.png"),
    iconSize: _iconSize
  });

}

/*function LocationMarker() {
  const [position, setPosition] = useState(null);

  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, []);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}*/



export default class BeerMap extends React.Component {








  state = {
    pivovarne: [],
    koordinate: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8081/map`)
      .then(res => {
        const pivovarne = res.data;
        const koordinate = [];

        console.log(pivovarne);

        pivovarne.forEach(pivovarna => {
          koordinate.push([pivovarna.x_koordinata, pivovarna.y_koordinata]);
        });

        this.setState({ pivovarne, koordinate });
      })
  }

  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        <div className="marginTopMap">
          <Map center={[46.0569, 14.5058]} zoom={8.5}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {


              this.state.pivovarne.map((pivovarna, stevec) =>
                <Marker position={this.state.koordinate[stevec]} icon={Icon(40)}>
                  <Popup>
                    {pivovarna.naziv_pivovarne} <br /> Pozicija = x: {pivovarna.x_koordinata} y: {pivovarna.y_koordinata}
                  </Popup>
                </Marker>
              )
            }




          </Map>
        </div>
      </motion.div>
    )
  }
}