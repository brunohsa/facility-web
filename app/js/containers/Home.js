import React, {Component}from 'react';

import MenuApp from '../components/MenuApp';
import BarChart from '../components/charts/SimpleBarChart';
import LineChart from '../components/charts/SimpleLineChart';
import TableApp from '../components/table/TableApp';

import '../../styles/home.css';

class Home extends Component {

    render() {
        return (
          <div id="home-container">
            <div className="home-menu-container">
              <MenuApp />
            </div>
            <div className="home-charts-container">
              <div id="div-chart-bar">
                <span className="title-charts" style={{paddingLeft:'33px'}}> Receita </span>
                <BarChart id="bar-chart-home"/>
              </div>
              <div id="div-line-chart">
                <span className="title-charts" style={{paddingLeft:'55px'}}> Despesas </span>
                <LineChart id="line-chart-home"/>
              </div>
            </div>
            <div>
              <TableApp />
            </div>
          </div>
        );
    }
}

export default Home;