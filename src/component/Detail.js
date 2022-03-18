import React from "react";
import { useState } from "react";
import {Link, useParams} from 'react-router-dom';

export default function Detail(){
    const [circle, circle_change] = useState([0, 1, 2, 3, 4]);
    const [index, index_change] = useState();
    const {id} = useParams();

    
    return(
        <div style={{maxWidth: "350px", width: "80vw", height: "30vh", margin: "5vh auto", padding: "5vh 5vw", border: "1px solid rgb(221, 221, 221)", boxSizing: "border-box", borderRadius: "5px"}}>
            <h4>
            <span style={{color: "white", width: "50px", border: "none", borderRadius: "5px", backgroundColor:"orange", alignItems: "center", justifyContent: "center", padding: "5px"}}>{id}요일</span> 평점 남기기</h4>
            <div style={{display:"flex", justifyContent: "center",alignItems: "center", margin: "1rem 0px"}}>
    
            <div className="detail-circles">
                {circle.map((e, i) => {
                return <div className="detail-circle"
                onClick={() => {
                    index_change(i)
                }}style = {{backgroundColor:i <=index ? ("yellow") : ("#e0e0e0")}}
                >
                </div>
                })}
            </div>


            
            {/* <div style={{width: "100%", width: "25px", height: "25px", borderRadius: "25px", margin: "5px", backgroundColor: "rgb(221, 221, 221)"}}>1</div>
            <div style={{width: "100%", width: "25px", height: "25px", borderRadius: "25px", margin: "5px", backgroundColor: "rgb(221, 221, 221)"}}>2</div>
            <div style={{width: "100%", width: "25px", height: "25px", borderRadius: "25px", margin: "5px", backgroundColor: "rgb(221, 221, 221)"}}>3</div>
            <div style={{width: "100%", width: "25px", height: "25px", borderRadius: "25px", margin: "5px", backgroundColor: "rgb(221, 221, 221)"}}>4</div>
            <div style={{width: "100%", width: "25px", height: "25px", borderRadius: "25px", margin: "5px", backgroundColor: "rgb(221, 221, 221)"}}>5</div> */}
        
        
        
        </div>
            <div style={{display:"flex", justifyContent: "center",alignItems: "center", margin: "1rem 0px"}}>
                <Link to='/' style={{width: "100%", backgroundColor: "purple", border: "none", borderRadius: "5px", padding: "1rem", textDecoration: 'none', fontSize: 'small', color: "rgb(255, 255, 255)"}}>평점 남기기</Link>
            </div>
            
        </div> 
    )
}
