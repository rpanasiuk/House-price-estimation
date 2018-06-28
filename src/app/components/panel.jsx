import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { fetchNearestNeighbours } from '../actions/action_fnn.jsx';

class Panel extends Component {

    render() { 
        return (
            <section className="panel container">
                <ul className="panel__list">
                    <li className="panel__list-item">
                        <Link to="/"><img src="./img/home.png" className="panel__logo" alt="Home"/></Link>
                    </li>
                    <li className="panel__list-item">
                        <Link to="/placeholder"><img src="./img/pie_chart.png" className="panel__logo" alt="Placeholder"/></Link>
                    </li>
                    <li className="panel__list-item">
                        <Link to="/district"><img src="./img/bar_chart.png" className="panel__logo" alt="District"/></Link>
                    </li>
                </ul>
            </section>    
        );
    }
}

function mapStateToProps({ houseData }) {
    return { houseData };
}

export default connect(mapStateToProps)(Panel);