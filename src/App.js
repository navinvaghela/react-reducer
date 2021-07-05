import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';
import NewsList from './Component/NewsList';
import CreateNews from './Component/CreateNews';


class App extends Component{
  styles = {
    fontStyle: 'bold',
    color: 'Red'
  }

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={NewsList}/>    
        <Route path="/createNews" component={CreateNews} />
        
      </BrowserRouter>
    )  
  }
}
export default App;
