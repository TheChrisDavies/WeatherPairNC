import React, { Component } from 'react';
import './App.css';
import {BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

let weatherJSX;
let temperatures = {}

class Chart extends Component {




    render(){

        if (Array.isArray(this.props.weatherArray)) {
            let copy = this.props.weatherArray;
            weatherJSX = copy.map((individualTemp, index) => {
                temperatures.push(individualTemp.main.temp)
                //need to add time here
            })
            createChart();
        }


        function Temp(temp, date) {
            this.temperature = temp;
            // this.date = 
        }

        // var myFather = new person("John", "Doe", 50, "blue");
        // var myMother = new person("Sally", "Rally", 48, "green");

        function createChart(){
            // const {BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;
            const data = [
                //   {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
                //   {name: 'Page B', uv: -3000, pv: 1398, amt: 2210},
                //   {name: 'Page C', uv: -2000, pv: -9800, amt: 2290},
                //   {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
                //   {name: 'Page E', uv: -1890, pv: 4800, amt: 2181},
                //   {name: 'Page F', uv: 2390, pv: -3800, amt: 2500},
                //   {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
                weatherJSX
            ];
            // const SimpleBarChart = React.createClass({
            //     render () {
            //       return (

            //     );
            //   }
            // })
            
            // ReactDOM.render(
            //   <SimpleBarChart />,
            //   document.getElementById('container')
            // );
        }


        


        return(
            <div>
                <div id="container">
                <BarChart width={600} height={300} data={data}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                   <XAxis dataKey="name"/>
                   <YAxis/>
                   <CartesianGrid strokeDasharray="3 3"/>
                   <Tooltip/>
                   <Legend />
                   <ReferenceLine y={0} stroke='#000'/>
                   <Bar dataKey="pv" fill="#8884d8" />
                   <Bar dataKey="uv" fill="#82ca9d" />
                  </BarChart>
                </div>
            </div>
        )
    }
}

export default Chart;
