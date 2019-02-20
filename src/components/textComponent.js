// basic react component starting template
import React, { Component } from "react";
import { connect } from 'react-redux';
import { textFunction } from '../actions/index';
import PropTypes from 'prop-types';

class SimpleComponent extends Component {
  componentDidMount() {
    this.props.textFunction();
  }

  render() {
    return <div>Simple Component</div>;
  }
}

// Define here 1) the action functions used below in connect; 2) the prop in the root reducer reducers/index.js corresponding to the current component
SimpleComponent.propTypes = {
  textFunction: PropTypes.func.isRequired,
  text: PropTypes.object.isRequired
}

// Send slice of Redux state to reducer
// convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    text: state.text
  };
}

//export default SimpleComponent;
export default connect(mapStateToProps, { textFunction })(SimpleComponent);