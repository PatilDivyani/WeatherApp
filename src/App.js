import React, { useState } from "react";
import './App.css';
import './style.css'


function App() {
  let [latitude, setLatitude] = useState(0);
  let [longitude, setLongitude] = useState(0);
  let [hemisphere, setHemisphere] = useState('');
  let [month, setMonth] = useState(new Date().getMonth());

  console.log('latitude',latitude);
  console.log('longitude',longitude);
  console.log(month +1 )

  function getLocation() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((location)=>{
        setLatitude(location.coords.latitude)
        setLongitude(location.coords.longitude);

        //As useState works asynchrounously t avoid this write here
        //Update Hemisphere
        location.coords.latitude>0 ? setHemisphere("Northern Hemisphere") : setHemisphere("Southern Hemisphere") 
        if(location.coords.latitude===0) setHemisphere("Equator")

        // let date = new Date();
        // console.log(date.getMonth)
      })
    }
  }

  return (
    <div >
      <h3>Latitude: {latitude} </h3>
      <h3>Longitude: {longitude} </h3>
      <h2>Hemisphere: {hemisphere} </h2>
        <button onClick={getLocation}>Get Location</button>
        {
          //for Months between March(2) to October(9) => summer
           //for Months between Nov(10) to Feb(1) => winter
          ( hemisphere==='Northern Hemisphere' && month>=2 && month>=9 )?
          <></> : <></>

        }
    </div>
  );
}

export default App;
