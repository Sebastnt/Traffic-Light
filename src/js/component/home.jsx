import { array } from "prop-types";
import React from "react";
import { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//create your first component
const Home = () => {
    const [change, setChange] = useState("");
    
    const colores = [{
        id : "red",
        classStyle : "bg-danger",
    },
    {
        id : "yellow",
        classStyle : "bg-warning",
    },
    {
        id : "green",
        classStyle : "bg-success",
    }
	]

    const [lista, setLista] = useState(colores)

    const agregar = () => {
        let newColor = { id: "blue", classStyle: "bg-primary" }
        setLista([...lista, newColor])
    }

 	const alternar = () =>{
		const trafficLight = document.querySelector(".main-box");
        setInterval(transition(trafficLight.childNodes), 3000)
	}

    const transition = (arrayDom) => {
        for(let i=0; i<arrayDom.length; i++) {
            let time = i*1000;
            setTimeout( () => {for (let j=0; j<arrayDom.length; j++) {
                arrayDom[j].classList.remove('iluminado')
            }
                arrayDom[i].classList.add('iluminado')}, time)
        }
    }

    return (
        <div className="container m-5 ">
            <div className="pole mx-auto text-center bg-dark"></div>
            <div className="main-box mx-auto text-center bg-dark rounded-5 p-1">
            {
                lista.map( ( {id,classStyle} ) => (
                    <div 
                        key={id} 
                        className={`light mx-auto ${classStyle} mt-1 ${(change === id ? "iluminado" : "")}`}  
                        onClick={() => setChange(id)}>                        
                    </div>
                ))
            }
            </div>
            <div className="buttons d-flex justify-content-around">
                <button className="btn btn-dark text-white rounded-4 mt-5 mx-auto p-1" onClick={alternar}>Alternar</button>
                <button className="btn btn-dark text-white rounded-4 mt-5 mx-auto p-1" onClick={agregar}>Agregar</button>
            </div>
        </div>
    );
};
export default Home;
