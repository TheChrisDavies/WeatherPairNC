import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Chart from "./Chart"
import recharts from 'recharts';

//OpenWeatherMap API Key 04555c7b75822478f6403a14d3b3a458

let weatherArray;
let weatherArray2;
let city1;
let city2;

class App extends Component {
  constructor() {
    super();
    this.state = {
      weatherInfo: {list: []},
      weatherInfo2: {list: []},
      loading: true,
      loading2: true,
    }

  this.getWeather = this.getWeather.bind(this);
  }

  getWeather(e){
    e.preventDefault();
    

    
    let city = document.getElementById('city').value.toLowerCase();
    let country = document.getElementById('country').value.toLowerCase();

    let city2 = document.getElementById('city2').value.toLowerCase();
    let country2 = document.getElementById('country2').value.toLowerCase();

    let weatherAPI = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&APPID=410d0d04903511f9ddb027ae7b887c75`;
    let weatherAPI2 = `http://api.openweathermap.org/data/2.5/forecast?q=${city2},${country2}&units=metric&APPID=410d0d04903511f9ddb027ae7b887c75`;

    this.setState({
      loading: true,
      loading2: true,
    })

    Promise.all([axios.get(weatherAPI), axios.get(weatherAPI2)])
    .then(response => {
      let weatherInfo = response[0].data;
      let weatherInfo2 = response[1].data;

      console.log(weatherInfo)
      console.log(weatherInfo2)

      this.setState({
        weatherInfo: weatherInfo,
        weatherInfo2: weatherInfo2,
        loading: false,
        loading2: false,
      })
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  render() {

    if(this.state.loading === false && this.state.loading2 === false){
      weatherArray = Array.from(this.state.weatherInfo.list);
      weatherArray2 = Array.from(this.state.weatherInfo2.list);
      city1 = Object.assign({}, this.state.weatherInfo.city);
      city2 = Object.assign({}, this.state.weatherInfo2.city);
    }

    return (
      <div className="App">
        <h1>Forecast comparison tool</h1>
        <form onSubmit={(e) => {this.getWeather(e)}}>
          <input type="text" name="city" id="city" placeholder="enter first city" />
          <select id="country">
            <option value="ca">Canada</option>
            <option value="us">US</option>
          </select>
        </form>
        <form onSubmit={(e) => {this.getWeather(e)}}>
          <input type="text" name="city" id="city2" placeholder="enter second city" />
          <select id="country2">
            <option value="ca">Canada</option>
            <option value="us">US</option>
          </select>
          <input id="submit" type="submit" value="Submit"/>
        </form>
        <Chart weatherArray={this.state.loading ? false : weatherArray} city1={this.state.loading ? false : city1} weatherArray2={this.state.loading2 ? false : weatherArray2} city2={this.state.loading ? false : city2}/>
      </div>
    );
  }
}

export default App;
