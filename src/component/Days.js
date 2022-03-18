import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';

export default function Days(props){

    const [circle, circle_change] = useState([0, 1, 2, 3, 4]);
    const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
    const num = getRandom(0, 5)


    return ( 
        <div style={{display:"flex", justifyContent: "center",alignItems: "center", margin: "1rem 0px", width: "100%"}}>
            <p style={{ margin: "0px 0.5rem 0px 0px", fontWeight: "bold"}}>{props.days}</p>
            
    
            <div className="main-circles">
              {circle.map((e, i) => {
                return <div className="main-circle"
                style = {{backgroundColor:i <= num ? ("yellow") : ("#e0e0e0")}}></div>;
              })}
            </div>
            
            
            {/* <div style={{width: "100%", width: "25px", height: "25px", borderRadius: "25px", margin: "5px", backgroundColor: "rgb(221, 221, 221)"}}></div>
            <div style={{width: "100%", width: "25px", height: "25px", borderRadius: "25px", margin: "5px", backgroundColor: "rgb(221, 221, 221)"}}></div>
            <div style={{width: "100%", width: "25px", height: "25px", borderRadius: "25px", margin: "5px", backgroundColor: "rgb(221, 221, 221)"}}></div>
            <div style={{width: "100%", width: "25px", height: "25px", borderRadius: "25px", margin: "5px", backgroundColor: "rgb(221, 221, 221)"}}></div>
            <div style={{width: "100%", width: "25px", height: "25px", borderRadius: "25px", margin: "5px", backgroundColor: "rgb(221, 221, 221)"}}></div> */}

      
    

            <Link to={`/day/${props.days}`} style={{appearance: "none", backgroundColor: "transparent", borderColor: "transparent purple", width: "0px", 
            height: "0px", borderTopWidth: "1rem", borderTopStyle: "solid", borderBottomWidth: "1rem", borderBottomStyle: "solid", 
            borderLeftWidth: "1.6rem", borderLeftStyle: "solid", color: "rgb(255, 255, 255)", cursor: "pointer"}}></Link>
        </div> 
    );
}