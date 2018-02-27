import React, {Component} from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers/';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';
import ReduxThunk from 'redux-thunk';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCHHced1JzXf6anX0OT81L1hr6GP44WHtk',
      authDomain: 'manager-fea9e.firebaseapp.com',
      databaseURL: 'https://manager-fea9e.firebaseio.com',
      projectId: 'manager-fea9e',
      storageBucket: '',
      messagingSenderId: '151636602577'
    };
    firebase.initializeApp(config);
  }
  render(){
    const store= createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
         <LoginForm />
      </Provider>
    );
  }
}
export default App;