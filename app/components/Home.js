// @flow
import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
import { Map } from './Map';
import { Settings} from './Settings';


type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() { return (
  <div className={styles.gridContainer}>
    <div className={styles.mainNav}>
      <ul className={styles.navBarList} >
          <li>
              <NavLink exact to={'/'} activeClassName='active'>Open</NavLink>
          </li>
          <li>
              <NavLink to={'/set-data-source'} activeClassName='active'>Save</NavLink>
          </li>
          <li>
              <NavLink to={'/open'} activeClassName='active'>Save As Image</NavLink>
          </li>
          <li>
              <NavLink to={'/save'} activeClassName='active'>Add Data Layer</NavLink>
          </li>
          <li>
              <NavLink to={'/save-as'} activeClassName='active'>Add Base Layer</NavLink>
          </li>
          <li>
              <NavLink to={'/variables'} activeClassName='active'>Help</NavLink>
          </li>
      </ul>
    </div>
    <div >
      <Map />
    </div>
    <div >
      <Settings />
    </div>
  </div>
  );
  }
}
  