import React, { Component } from 'react';
import './App.css';
import SimpleComponent from './components/textComponent';
import List from './components/listComponent';
import { Container } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="All">
            React Redux Starter Template
            <Container>
              <SimpleComponent />
              <List />
            </Container>

            <pre>{`
* Data flow: <Component> is used by App. component uses componentDidMount on action function -> dispatch (return?) action object. 
  Reducer has logic to return new state object. 
  
  So State is "defined in reducer"

* To get data from or dispatch actions to Redux Store: use connect with action function and mapStateToProps:

    SimpleComponent.propTypes = {
      myactionFunction: PropTypes.func.isRequired,
      text: PropTypes.object.isRequired
    }
    function mapStateToProps(state) {
      return {
        text: state.default
      }
    }
    export default connect(mapStateToProps, {myactionFunction})(SimpleComponent); 
       
* To add a reducer, add in root reducer reducers/index.js:

    const rootReducers = combineReducers({
      // add reducer files references here
      text: defaultReducer,
      data: postReducer
    });

* To have a component trigger an action, add to component:

    componentDidMount() {
      this.props.actionFunction();
    }    

            `}</pre>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;