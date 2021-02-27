import React, { useState } from 'react';
import "./main.css";

function Oldie(){
const [age, setAge] = useState(27);
const handleAge = () => {
  setAge(age + 1);
}

const [present, setPresents] = useState(0);
const handlePresents = () => {
    setPresents(present + 1) ;
}
        return(
        <>
        <input type="button" value="oldie but goldie" class="btn" onClick={handleAge}/>
        <input type="button" value="gimme gimme more" class="btn2" onClick={handlePresents}/>
        <p>Hoy tengo {age} años de edad</p>
        <p>Tengo {present} regalos</p>
        
</>
        );
    }

export default Oldie;