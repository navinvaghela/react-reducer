import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, TextareaAutosize } from '@material-ui/core';


const mapStatetoProps = state => {
    return {
        message: state.message,
        news: state.news
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        getNews: () => dispatch({ type: "GET_NEWS" }),
        saveNews: (newsData) => dispatch({ type: "SAVE_NEWS", data: newsData }),
    }    
} 

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    textarea: {
       width: '219px',   
    },
}));
  
const CreateNews = (props) => {
    const [newsTitle, setNewsTitle] = useState('');
    const [newsDescription, setNewsDescription] = useState('');
    const [newsUrl,setNewsUrl] = useState('');
    const [news, setNews] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        if(props.news === undefined) {
            props.saveNews([]);
        } else {
            setNews(props.news);
        }
    }, [props]);

    const saveNews = () => {
        const newsData = [...news];
        const formdata = {
            title: newsTitle,
            url: newsUrl,
            description: newsDescription,
            author: "By Aya Elamroussi, CNN",
            urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/210701222253-coronavirus-vaccine-mongolia-0223-super-169.jpg",
            publishedAt: "2021-07-02T06:45:30Z"
        }
        newsData.push(formdata);
        props.saveNews(newsData);
        props.history.push('/');

    }
    
    return <div>
        <form className={classes.root} noValidate autoComplete="off">
            <div className="">
                <TextField id="outlined-basic" label="News Title" value={newsTitle} variant="outlined" onChange={(e) => setNewsTitle(e.target.value)} />
            </div>
            <div className="">
                <TextField id="outlined-basic" label="Url" value={newsUrl}  variant="outlined" onChange={(e) => setNewsUrl(e.target.value)}/>
            </div>
            <div className="">
                <TextareaAutosize className={classes.textarea} name="description" value={newsDescription}  aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" onChange={(e) => setNewsDescription(e.target.value)}/>
            </div>
            <div className="">
                <Button variant="contained" color="primary" onClick={saveNews}>Save</Button>
            </div>
        </form>
    </div>
}

export default connect(mapStatetoProps, mapDispatchtoProps) (CreateNews);