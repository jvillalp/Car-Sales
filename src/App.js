import React from 'react';
//imports 
import {createStore} from 'redux';
import {connect} from 'react-redux';
//import components
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
//reducers
import { featuresReducer} from './reducers/featuresReducer';
//actions
import { addFeature, removeFeature } from './actions/featuresAction';

const store = createStore(featuresReducer);
// console.log(store.getState());

const App = props => {
console.log('this is props',props); 
 
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
      additionalPrice: state.additionalPrice,
      car: state.car,
      additionalFeatures: state.additionalFeatures,
  };
}
//connect is a function that gets called twice
export default connect(mapStateToProps, {
  addFeature,
  removeFeature
})(App);
