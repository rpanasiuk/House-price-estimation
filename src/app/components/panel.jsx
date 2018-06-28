import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { fetchNearestNeighbours } from '../actions/action_fnn.jsx';

class Panel extends Component {

    render() { 
        return (
            <div className="container container--panel">
                <ul className="panel-list">
                    <li className="panel-list-item">
                        <Link to="/"><img src="./img/home.png" className="panel__logo" alt="Home"/></Link>
                    </li>
                    <li className="panel-list-item">
                        <Link to="/view1"><img src="./img/pie_chart.png" className="panel__logo" alt="Placeholder"/></Link>
                    </li>
                    <li className="panel-list-item">
                        <Link to="/view2"><img src="./img/bar_chart.png" className="panel__logo" alt="District"/></Link>
                    </li>
                </ul>
            </div>    
        );
    }
}

function mapStateToProps({ houseData }) {
    return { houseData };
}

export default connect(mapStateToProps)(Panel);