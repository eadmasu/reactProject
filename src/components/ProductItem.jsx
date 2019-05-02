import React, {Component} from 'react';
import PropTypes from 'prop-types';
import storeItems from "../data/storeItems";

// import './App.css';
// import _ from 'lodash';
// import foodItems from './data/fooditems.js';

class ComponentTemplate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // key1: starting value,
            // key2: starting value, etc
        }
        // example of binding a method so "this" will be recognized within it
        // this.addToRecipe = this.addToRecipe.bind(this);
    }

    // example of event handler method
    addToRecipe(event) {
        const id = event.target.name;   // eg, if the item calling this has a name that is an id
        this.setState({
            // key: new value based on existing state or not
        })
    }

    // any other class methods go here

    render() {


        return (
            <div>
                div className="col-sm-4">
                <h3>{this.props.name}</h3>
                <p>price: {this.props.price}</p>
            </div>

        );
    }

}

ComponentTemplate.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default ComponentTemplate;