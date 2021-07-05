import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';


const articleStyle = {
    width: '50%',
    margin: '0 auto',
    color: 'olive'
};

const imgStyle = {
    hight: 'auto',
    width: '80%',
    border: '4px solid red',
    borderRedius: '5%'
};

const mapDispatchtoProps = dispatch => {
  return {
      getNews: () => dispatch({ type: "GET_NEWS" }),
  }    
} 

const mapStateToProps = (state) => ({
  newsdata: state.news,
});

const useStyles = makeStyles((theme) => ({
  fullWidth: {
    width: '100%',
    float: 'left',   

  },
  floatLeft: {
     float: 'left',
     margin: '20px'   
  },
  floatRight: {
    float: 'right',   
    margin: '20px' 
 },
}));

const NewsList = (props)=> {   
  const classes = useStyles();

  useEffect(() => {
    if(props.newsdata === undefined){
        props.getNews();
    }
  }, []);

  const createNews = () => {
    props.history.push('/createNews');
  }

  return (
    <>
    <div className={classes.fullWidth}>
      <div className={classes.floatLeft}>
        <button variant="contained" color="primary" onClick={createNews}>Create News</button>
      </div>
      <div className={classes.floatRight}>
        <h1>Count : {props.newsdata && props.newsdata.length}</h1>
      </div>
    </div>
    
    {
      props.newsdata ?
        props.newsdata.map((news, index) => {
          return (
            <article style={articleStyle} key={index}>
              <div>
                <h1>{news.title}</h1>
                <img style={imgStyle} src={news.urlToImage} alt="" />
                <h4>{news.description}</h4>
                <a href={news.url} target="_blank" rel="noreferrer">READ MORE</a>
              </div>
            </article> 
          )
        })
      :
      null
    }
    </>
  );
}
    
export default connect(mapStateToProps,mapDispatchtoProps)(NewsList);
    
    
    