import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
//import { useMap } from 'react-leaflet/hooks'
import axios from 'axios';
import "../styles/map.css";
import L from "leaflet";


function Icon (_iconSize){

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
    axios.get(`http://localhost:5001/map`)
      .then(res => {
        const pivovarne = res.data;
        const koordinate = [];

        pivovarne.foreach(pivovarna => {
          koordinate.push([pivovarna.x_koordinata, pivovarna.y_koordinata]);
        });

        this.setState({ pivovarne, koordinate });
      })
  }

  render() {
    return (
      <Map center={[46.0569, 14.5058]} zoom={8.5}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {
          

        this.state.pivovarne.map((pivovarna, stevec) => 
          <Marker position={this.state.koordinate[stevec]} icon = {Icon(40)}>
            <Popup>
              {pivovarna.naziv_pivovarne} <br /> Pozicija = x: {pivovarna.x_koordinata} y: {pivovarna.y_koordinata}
            </Popup>
          </Marker>
        )
        }


        
  
      </Map>
    )
  }
}