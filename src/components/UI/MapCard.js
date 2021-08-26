import { useEffect } from "react";

const MapCard = (props) =>{
    useEffect(() => {
        var jvm = new window.jsVectorMap({
            map: "world_merc",
            selector: '#'+props.id, // # should start with # for id 
            zoomButtons: true,
    
            regionStyle: {
              initial: {
                fill: "#d1d5db",
              },
            },
    
            labels: {
              markers: {
                render: (marker) => marker.name,
              },
            },
    
            markersSelectable: true,
            selectedMarkers: props.markers.map((marker, index) => {
              var name = marker.name;
    
              if (name === "Russia" || name === "Brazil") {
                return index;
              }
            }),
            markers: props.markers,
            markerStyle: {
              initial: { fill: "#2F80ED" },
              selected: { fill: "#ff5050" },
            },
            markerLabelStyle: {
              initial: {
                fontWeight: 400,
                fontSize: 14,
              },
            },
          });
    })

    return (
        <div className="card-style mb-30 overflow-hidden">
            <div className="title d-flex justify-content-between align-items-center">
                <div className="left">
                <h6 className="text-medium mb-30">{props.heading}</h6>
                </div>
            </div>
            <div id={props.id} style={{"width": "100%", "height": "400px"}}></div>
            <p>Last updated: 7 days ago</p>
        </div>
    )
}

export default MapCard;