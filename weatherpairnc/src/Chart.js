import React, { Component } from 'react';
import './App.css';
import {BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

let weatherJSX;

class Chart extends Component {

    render(){

        let city1 = this.props.city1["name"]
        let city2 = this.props.city2["name"];

        function Temp(temp, temp2, time) {
            this[city1] = temp;
            this[city2] = temp2;
            this.diff = Math.abs(temp - temp2);
            this.time = time; 
        }

        let city1Sum = 0;
        let city2Sum = 0;

        if (Array.isArray(this.props.weatherArray) && Array.isArray(this.props.weatherArray2)) {
            let copy = this.props.weatherArray;
            let copy2 = this.props.weatherArray2;

            for (let i=0; i < copy.length; i++){
                copy[i].main.temp2 = copy2[i].main.temp;
            }

            weatherJSX = copy.map((individualTemp, index) => {
                city1Sum += parseInt(individualTemp.main.temp)
                city2Sum += parseInt(individualTemp.main.temp2)
                return new Temp(individualTemp.main.temp, individualTemp.main.temp2, individualTemp.dt_txt)
            })

            let city1Avg = (city1Sum/40).toFixed(1);
            let city2Avg = (city2Sum/40).toFixed(1);

            return(
                <div>
                    <p>The average temperatures in <b>{city1}</b> and <b>{city2}</b> will be <b>{city1Avg}°C</b> and <b>{city2Avg}°C</b> over the next 5 days, respectively.</p>
                    <div id="container">
                        <BarChart width={1600} height={500} data={weatherJSX}
                                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                            <XAxis dataKey="time"/>
                            <YAxis/>
                            <CartesianGrid strokeDasharray="5 5"/>
                            <Tooltip/>
                            <Legend />
                            <ReferenceLine y={0} stroke='#000'/>
                            <Bar dataKey={city1} fill="#8884d8" />
                            <Bar dataKey={city2} fill="#82ca9d" />
                            <Bar dataKey="diff" fill="#ed0d09" />
                        </BarChart>
                    </div>
                </div>
            )
        } else {
            return (
                <h2>Please select two cities to compare</h2>
            )
        }

    }
}

export default Chart;
