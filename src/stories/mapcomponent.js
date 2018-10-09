import React from "react";

import { storiesOf } from "@storybook/react";
import MapComponent from "../components/map-component/MapComponent";

storiesOf("MapComponent", module)
  .add("Default setting", () => (
    <div style={{ height: `600px`, width: `600px` }}>
      <MapComponent />
    </div>
  ))
  .add("set map center to HYF", () => (
    <div style={{ height: `600px`, width: `600px` }}>
      <MapComponent
        mapCenter={{ lat: 55.6608889, lng: 12.5397036 }}
        setMarker
        Zoom={18}
      />
    </div>
  ))
  .add("set map to UCPH Zoom=14", () => (
    <div style={{ height: `600px`, width: `600px` }}>
      <MapComponent
        mapCenter={{ lat: 55.6802303, lng: 12.5718571 }}
        setMarker
        Zoom={14}
      />
    </div>
  ))
  .add("set map to UCPH Zoom=17", () => (
    <div style={{ height: `600px`, width: `600px` }}>
      <MapComponent
        mapCenter={{ lat: 55.6802303, lng: 12.5718571 }}
        setMarker
        Zoom={17}
      />
    </div>
  ));
