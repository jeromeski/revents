import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter} from './test-actions';
import TestPlaceInput from './TestPlaceInput';
import SimpleMap from './SimpleMap';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const mapStateToProps = ({test: {data}}) => ({
  data
})

const mapDistpatchToProps = {
  incrementCounter, decrementCounter
}

class TestArea extends Component {

  state = {
    latlng: {
      lat: 59.95,
      lng: 30.33
    }
  }

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };


  render() {
    const {data, incrementCounter, decrementCounter} = this.props
    return (
      <div>
        <h1> The data is: {data} </h1>
        <Button onClick={incrementCounter} positive content='increment'/>
        <Button onClick={decrementCounter} negative content='decrement'/>
        <br/>
        <br/>
        <TestPlaceInput selectAddress={this.handleSelect} />

        <br/>
        <br/>
        <SimpleMap key={this.state.latlng.lng} latlng={this.state.latlng} />
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDistpatchToProps)(TestArea);