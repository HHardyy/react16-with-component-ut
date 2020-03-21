import React from 'react';
import Ioicons from 'react-ionicons';
import PropTypes from 'prop-types';
import { LIST_VIEW, CHART_VIEW } from '../utility.js';

const generateLinkClass = (current, view) => {
  return ( current === view ) ? 'nav-link active' : 'nav-link' 
}

const ViewTab = ({ activeTab, onTabChange }) => (
  <ul className="nav nav-tabs nav-fill my-4">
    <li className="nav-item">
      <a 
      className={generateLinkClass(activeTab, LIST_VIEW)}
      rel="noopener"
      href="#"
      onClick={(event) => {
        event.preventDefault()
        onTabChange(LIST_VIEW)
      }}
      >
      <Ioicons 
          className="rounded-circle mr-2"
          fontSize="25px"
          color={'#007bff'}
          icon='ios-paper'
        />
        列表模式
      </a>
    </li>
    <li className="nav-item">
      <a 
      className={generateLinkClass(activeTab, CHART_VIEW)}
      rel="noopener"
      href="#"
      onClick={(event) => {
        event.preventDefault()
        onTabChange(CHART_VIEW)
      }}
      >
      <Ioicons 
        className="rounded-circle mr-2"
        fontSize="25px"
        color={'#007bff'}
          icon='ios-pie'
      />
        图表模式
      </a>
    </li>
  </ul>
)

ViewTab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired
}
export default ViewTab