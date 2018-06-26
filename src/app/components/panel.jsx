import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { fetchNearestNeighbours } from '../actions/action_fnn.jsx';

class Panel extends Component {

    render() {
        const style = {
            padding: "30px", 
            background: "black",
            color: "white"
        };

        return (
            <div>
                <ul className="panel-list">
                    <li className="panel-list-item"><Link to="/">Home</Link></li>
                    <li className="panel-list-item"><Link to="/view1">secondaryView</Link></li>
                    <li className="panel-list-item"><Link to="/view2">District</Link></li>
                </ul>
            </div>    
        );
    }
}

function mapStateToProps({ houseData }) {
    return { houseData };
}

export default connect(mapStateToProps)(Panel);