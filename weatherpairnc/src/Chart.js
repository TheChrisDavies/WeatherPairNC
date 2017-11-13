import React, { Component } from 'react';
import './App.css';
import {BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

let weatherJSX;
let weatherJSX2;

class Chart extends Component {

    render(){

        let city1 = this.props.city1["name"]
        let city2 = this.props.city2["name"];

        function Temp(temp, temp2, time) {
            this[city1] = temp;
            this[city2] = temp2;
            this.time = time; 
        }

        if (Array.isArray(this.props.weatherArray) && Array.isArray(this.props.weatherArray2)) {
            let copy = this.props.weatherArray;
            let copy2 = this.props.weatherArray2;

            for (let i=0; i < copy.length; i++){
                copy[i].main.temp2 = copy2[i].main.temp;
            }

            console.log(copy)

            weatherJSX = copy.map((individualTemp, index) => {
                return new Temp(individualTemp.main.temp, individualTemp.main.temp2, individualTemp.dt_txt)
            })
        }

        return(
            <div>
                <div id="container">
                    <BarChart width={1600} height={300} data={weatherJSX}
                            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <XAxis dataKey="time"/>
                        <YAxis/>
                        <CartesianGrid strokeDasharray="5 5"/>
                        <Tooltip/>
                        <Legend />
                        <ReferenceLine y={0} stroke='#000'/>
                        <Bar dataKey={city1} fill="#8884d8" />
                        <Bar dataKey={city2} fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
        )
    }
}

export default Chart;
