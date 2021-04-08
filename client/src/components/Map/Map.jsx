import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";

const mapData = {
  hollywoodHillsWest: [34.1132458, -118.3669501],
  hollywoodHills: [34.1131916, -118.4194806],
  griffithPark: [34.1365588, -118.2963887],
  westHollywood: [34.0872479, -118.3783668],
  downtown: [34.0392321, -118.2837561],
  chinatown: [34.0671948, -118.2491091],
  elysianPark: [34.081702, -118.2476331],
  elysianValley: [34.0958978, -118.2510474],
  echoPark: [34.0854648, -118.2643221],
  silverLake: [34.0932629, -118.2849348],
  westlake: [34.0577288, -118.2856576],
  picoUnion: [34.0448094, -118.2935566],
  harvardHeights: [34.0422392, -118.3129215],
  koreatown: [34.0608055, -118.3091387],
  eastHollywood: [34.0898091, -118.3054416],
  losFeliz: [34.108176, -118.2966132],
  hollywood: [34.0937851, -118.3439877],
  larchmont: [34.0730726, ],
  windsorSquare: [-118.3326437],
  arlingtonHeights: [34.0422392, -118.3276651],
  midWilshire: [34.0596662, -118.360482],
  midCity: [34.0479267, -118.3708643],
  hancockPark: [34.0692438, -118.345412],
  fairfax: [34.0789286, -118.3615181],
  beverlyGrove: [34.0766675, -118.3936502],
  carthay: [34.0558552, -118.3768057]
}

export default function Map({neighborhood}) {
  var hood = mapData[neighborhood]
  const InnerMap = () => {
    return (
      <GoogleMap
      defaultZoom={14}
      defaultCenter={{lat: hood[0], lng: hood[1]}}
      >
        <Marker
          position={{
            lat: hood[0],
            lng: hood[1]
          }}
          />
      </GoogleMap>
    )
  }

  const Wrapped = withScriptjs(withGoogleMap(InnerMap));
  return (
    <div style={{width: '50vw', height: '50vh'}}>
      <Wrapped
        googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBYhkZV9wJYaqnfcvAq5Doga7IKh_Fjh1E"}
        loadingElement={<div style={{height: "100%"}} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  )
}

