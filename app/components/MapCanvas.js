// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './MapCanvas.css';
import routes from '../constants/routes';
import {
  interaction,
  layer,
  custom,
  control, //name spaces
  Interactions,
  Overlays,
  Controls, //group
  Map,
  Layers,
  Overlay,
  Util //objects
} from 'epi-info-react-openlayers';

type Props = {};

export class MapCanvas extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.Component}>
        <Map view={{ center: [0, 0], zoom: 2 }}>
          <Layers>
            <layer.Tile />
          </Layers>
          <Controls attribution={false} zoom={true}>
            <control.Rotate />
            <control.ScaleLine />
            <control.FullScreen />
            <control.OverviewMap />
            <control.ZoomSlider />
            <control.ZoomToExtent />
            <control.Zoom />
          </Controls>
        </Map>
        <custom.Popup ref={comp => (this.popupComp = comp)} />
      </div>
    );
  }
}
