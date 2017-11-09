import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// import * as d3 from "d3";

//OpenWeatherMap API Key 04555c7b75822478f6403a14d3b3a458

let weatherAPI = 'http://api.openweathermap.org/data/2.5/forecast?id=6167865&units=metric&APPID=04555c7b75822478f6403a14d3b3a458';
class App extends Component {
  constructor() {
    super();
    this.state = {
      weatherInfo: {list: []},
      loading: true
    }
    // Example binding
    // this.playSong = this.playSong.bind(this);
    // this.componentWillMount = this.componentWillMount.bind(this);
  } 
  componentWillMount(){
    axios.get(weatherAPI)
    .then(response => {
      console.log(response);
      
      this.setState({
        weatherInfo: response.data,
        loading: false
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    // let copy = Object.assign({}, this.state.weatherInfo);
    // let copy = Array.from(this.state.weatherInfo)
    // console.log('the copy:', copy.list);
    //   for(let i = 0; i <= copy.list.length; i++)
    // {
    //   console.log(copy.list[i].main.temp)
    // }
    
    
    // let copy = Array.from(this.state.weatherInfo)
    if(this.state.loading === false){
    let weatherArray = Array.from(this.state.weatherInfo.list);
    // console.log('Weather Array ', weatherArray);
    for(let i = 0; i < 40; i++)
    {
      console.log(weatherArray[i].main.temp)
    }
  }
    // let weatherJSX = copy.map((tempz, index) => {
    //     return (
    //     <div>
    //         <h3>{tempz.main.temp}</h3>
    //     </div>
    //     )
    // });


    return (
      <div className="App">
        Sandwich
      </div>
    );
  }
}

export default App;
