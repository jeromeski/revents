import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter} from './test-actions';

const mapStateToProps = ({test: {data}}) => ({
  data
})

const mapDistpatchToProps = {
  incrementCounter, decrementCounter
}

class TestArea extends Component {
  render() {
    const {data, incrementCounter, decrementCounter} = this.props
    return (
      <div>
        <h1> The data is: {data} </h1>
        <Button onClick={incrementCounter} positive content='increment'/>
        <Button onClick={decrementCounter} negative content='decrement'/>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDistpatchToProps)(TestArea);