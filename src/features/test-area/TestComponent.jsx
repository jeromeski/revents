import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { incrementAsync, decrementAsync } from "./test-actions";
import TestPlaceInput from "./TestPlaceInput";
import SimpleMap from "./SimpleMap";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { openModal } from "../modals/modalActions";

const mapStateToProps = state => ({
  data: state.test.data,
  loading: state.async.loading,
  buttonName: state.async.elementName
});

const mapDistpatchToProps = {
  incrementAsync,
  decrementAsync,
  openModal,
};

class TestArea extends Component {
  state = {
    latlng: {
      lat: 59.95,
      lng: 30.33
    }
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };

  render() {
    const {
      data,
      incrementAsync,
      decrementAsync,
      openModal,
      loading,
      buttonName
    } = this.props;
    return (
      <div>
        <h1> The data is: {data} </h1>
        <Button
          name="increment"
          loading={buttonName === 'increment' && loading}
          onClick={e => incrementAsync(e.target.name)}
          positive
          content="increment"
        />
        <Button
          name="decrement"
          loading={buttonName === 'decrement' && loading}
          onClick={e => decrementAsync(e.target.name)}
          negative
          content="decrement"
        />
        <Button
          onClick={() => openModal("TestModal", { data: 42 })}
          color="teal"
          content="Open Modal"
        />
        <br />
        <br />
        <TestPlaceInput selectAddress={this.handleSelect} />
        <br />
        <br />
        <SimpleMap key={this.state.latlng.lng} latlng={this.state.latlng} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDistpatchToProps)(TestArea);
