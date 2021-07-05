import React from 'react';
import { connect } from 'react-redux'
import img from '../Loader_spinner3.jfif'

const mapStateToProps = (state) => ({
   loading: state.loading
});

const Loading = (props) => {
   return (
      props.loading ?
         <div style={{ textAlign: 'center' }}>
            <h1>LOADING...</h1>
            <img src={img} alt='loading' />
         </div> 
      :
      null
   )
};

export default connect(mapStateToProps,null)(Loading);
    
