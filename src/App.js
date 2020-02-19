import React, {useState} from 'react';
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
import { addFeature, removeFeature, addFeaturePrice, removeFeaturePrice } from './actions/featuresAction';

const store = createStore(featuresReducer);
// console.log(store.getState());

const App = props => {
console.log('this is props',props); 


  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item)
    props.removeFeaturePrice(item.price)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item)
    props.addFeaturePrice(item.price)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} additionalPrice={props.additionalPrice}/>
        <AddedFeatures addFeature={props.addFeature} removeFeature={props.removeFeature} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} additionalFeatures={props.additionalFeatures} />
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
  removeFeature,
  addFeaturePrice,
  removeFeaturePrice
})(App);
