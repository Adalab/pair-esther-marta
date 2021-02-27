import React from 'react'
import './App.css';

class App extends React.Component {
  render() {
const students = [
  {
    promo: 'A',
    name: 'Sofía',
    age: 20
  },
  {
    promo: 'B',
    name: 'María',
    age: 21
  },
  {
    promo: 'A',
    name: 'Lucía',
    age: 22
  }
];
/*
return (
  <div>
{students.map(student =>{
  return (
    <li>
      <h2>Nombre: {student.name}</h2>
      <p>Edad: {student.age}</p>
 
    </li>
  );
})}

  </div>
)
)}}*/
return (
  <div>
{students.filter(student => student.promo ==='A').map(student =>{ 
  return (
    <li>
      <h2>Nombre: {student.name}</h2>
      <p>Edad: {student.age}</p>
      <p>Promo: {student.promo}</p>

    </li>
  );
})}

  </div>
)
}}

export default App;
