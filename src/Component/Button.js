import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../actions';


const mapDispatchToProps = dispatch => {
   return {
      getNews: () => dispatch(getNews())
   }    
} 

const Button = (props) => {
   return <button onClick={props.getNews}>Get News List</button>
}

export default connect(null,mapDispatchToProps)(Button);
