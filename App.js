import React, { Component } from 'react'
import {} from 'react-native';
import {Provider} from 'react-redux';
import PeopleList from './PeopleList';
import store from './redux/store'

class App extends Component{

  render() {
    return(
      <Provider store={store}>
      <PeopleList />
      </Provider>
    );
  }
}

export default App
