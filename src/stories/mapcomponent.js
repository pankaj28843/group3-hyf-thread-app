import React from "react";

import { storiesOf } from "@storybook/react";
import MapComponent from "../components/map-component/MapComponent";

storiesOf("MapComponent", module)
  .add("Default setting", () => <MapComponent />)
  .add("set map center to HYF", () => (
    <MapComponent
      mapCenter={{ lat: 55.661629, lng: 12.540446 }}
      setMarker
      Zoom={18}
    />
  ))
  .add("set map to UCPH Zoom=14", () => (
    <MapComponent
      mapCenter={{ lat: 55.6802303, lng: 12.5718571 }}
      setMarker
      Zoom={14}
    />
  ))
  .add("set map to UCPH Zoom=17", () => (
    <MapComponent
      mapCenter={{ lat: 55.6802303, lng: 12.5718571 }}
      setMarker
      Zoom={17}
    />
  ));
