import React from 'react';
import "./App.css";
import "leaflet/dist/leaflet.css";
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography"; 


import { MapContainer, TileLayer, Marker, Popup, useMap, Circle, LayersControl, LayerGroup} from 'react-leaflet'


function App() {


  const style = { 
    appBar: { 
        padding: 5,
    }, 
    paper: {
        color: "white", 
        margin: 10, 
        padding: 8,
        fontSize:'30px',    
    }
}


  React.useEffect(() => {
    const L = require("leaflet");

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png")
    });

  })

return (
<>
  <AppBar position='sticky' color="primary" style={style.appBar}> 
            <Toolbar > 
                <Grid container justifyContent="flex-start" > 
                <Typography style={style.paper}>CH Atomkraftwerk</Typography> 
                </Grid>
                <Grid container justifyContent="flex-end"> 
            </Grid> 
            </Toolbar>
        </AppBar>

  <MapContainer center={[47.1376, 8.4326]} zoom={8} scrollWheelZoom={true}>
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
 attribution='&copy; <a
href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 />
    
      <LayerGroup>
  <Marker position={[47.6013, 8.1837]}>
    <Popup>
      AKW Leibstadt
    </Popup>
    <Circle center = {[47.6013, 8.1837]} radius = {50000} color = {'blue'}/> //Leibstadt
  </Marker>
  </LayerGroup>

      <LayerGroup>
  <Marker position={[47.3658, 7.9689]}>
    <Popup>
      AKW Gösgen
    </Popup>
    <Circle center = {[47.3658, 7.9689]} radius = {50000} color = {'blue'}/> // Gösgen
  </Marker>
  </LayerGroup>

      <LayerGroup>
  <Marker position={[46.9708, 7.2702]} color='error'>
    <Popup>
      AKW Mühleberg
    </Popup>
    <Circle center = {[46.9708, 7.2702]} radius = {50000} color = {'blue'}/> // Mühleberg
  </Marker>
  </LayerGroup>

      <LayerGroup>
  <Marker position={[47.5522, 8.2277]}>
    <Popup>
      AKW Beznau
    </Popup>
    <Circle center = {[47.5522, 8.2277]} radius = {50000} color = {'blue'}/>  // Beznau
  </Marker>
  </LayerGroup>
  

</MapContainer>
  </>);
}

export default App;