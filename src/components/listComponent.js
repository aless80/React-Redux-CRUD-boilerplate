import React, { Component } from 'react';
//import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
//import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems } from '../actions/index';
import PropTypes from 'prop-types';

class List extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    return (
      <div>
        List
      </div>
    )
  }
}

// Define here 1) the action functions used below in connect; 2) the prop in the root reducer reducers/index.js corresponding to the current component
List.propTypes = {
  getItems: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
}

// Send slice of Redux state to reducer
// convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    data: state.data //data because it is in root reducer reducers/index.js
  };
}

export default connect(mapStateToProps, { getItems })(List);