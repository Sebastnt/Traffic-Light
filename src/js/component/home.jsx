import React from "react";
import { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//create your first component
const Home = () => {
    const [change, setChange] = useState("");
    const colores = [{
        id : "red",
        classStyle : "bg-danger"
    },
    {
        id : "yellow",
        classStyle : "bg-warning"
    },
    {
        id : "green",
        classStyle : "bg-success"
    }
]
const alternar = () =>{
    setInterval(()=>{
        
    })
}
    return (
        <div className="container m-5">
            <div className="traffic mx-auto text-center bg-dark"></div>
            {/* <div className="main-box mx-auto text-center bg-dark rounded-5 p-1">
                <div className={`color bg-danger mt-2 ${(change === "red" ? "iluminado" : "")}`}  onClick={() => setChange("red")}></div>
                <div className={`color bg-warning ${(change === "yellow" ? "iluminado" : "")}`} onClick={() => setChange("yellow")} ></div>
                <div className={`color bg-success ${(change === "green" ? "iluminado" : "")}`} onClick={() => setChange("green")} ></div>
            </div> */}
            <div className="main-box mx-auto text-center bg-dark rounded-5 p-1">
            {
                colores.map( ( {id,classStyle} ) => (
                    <div 
                        key={id} 
                        className={`color ${classStyle} mt-2 ${(change === id ? "iluminado" : "")}`}  
                        onClick={() => setChange(id)}>                        
                    </div>
                ))
            }
            </div>
            <button onClick={alternar}>Alternar</button>
        </div>
    );
};
export default Home;
