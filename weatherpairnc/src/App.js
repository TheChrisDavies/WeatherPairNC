import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Chart from "./Chart"
import recharts from 'recharts';

//OpenWeatherMap API Key 04555c7b75822478f6403a14d3b3a458

let weatherAPI = 'http://api.openweathermap.org/data/2.5/forecast?id=6167865&units=metric&APPID=04555c7b75822478f6403a14d3b3a458';
let weatherJSX;
let weatherArray;

class App extends Component {
  constructor() {
    super();
    this.state = {
      weatherInfo: {list: []},
      loading: true
    }
    // Example binding
    // this.playSong = this.playSong.bind(this);
  }

  componentWillMount(){
    axios.get(weatherAPI)
    .then(response => {
      
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

    if(this.state.loading === false){
      weatherArray = Array.from(this.state.weatherInfo.list);
    }

    return (
      <div className="App">
        <Chart weatherArray={this.state.loading ? false : weatherArray}/>
      </div>
    );
  }
}

export default App;
