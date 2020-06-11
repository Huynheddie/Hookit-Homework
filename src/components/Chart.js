import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

const Chart = ({ label, sortedPosts, xAxis, dataKey }) => {
    return (
        <div>
            <h2>{label}</h2>
            <BarChart width={1000} height={300} data={sortedPosts.slice(-5)}
            margin={{top: 5, right: 30, left: 20, bottom: 5}} style={{margin: "0 auto"}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey={xAxis}/>
                <YAxis/>
                <Tooltip/>
                <Bar dataKey={dataKey} fill="#8cc439" />
            </BarChart>
        </div>
        
    )
}

export default Chart;