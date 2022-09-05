import './Divisores.css'
import React, {useEffect, useState} from 'react';

const url = 'https://divisores-primos-api.herokuapp.com/divisores/'


export default function Divisores(){


  const [divisores, setDivisores] = useState([])
  const [primos, setPrimos] = useState([])
  const [entrada, setEntrada] = useState([0])

  const getDivisores = async(url) => {
    const res = await fetch(url);
    const data = await res.json();
    setDivisores(data.divisores)
    setPrimos(data.primos)
    
  }

  useEffect(()=>{    
    const divisoresUrl = `${url}${entrada}`;
    getDivisores(divisoresUrl);
  },[entrada]);

  const visualizar=()=>{
    console.log(entrada)
  }

  
  return (
    <dir className='container'>      
      <h2 className='title'>Divisores de números e primos via API</h2>
      <div id="divCal">
      <input type="number" min="0" step="1" id="txtCal" placeholder="Digite um número inteiro" onChange={(e)=> {
         if(e.target.value % 1 === 0){
          setEntrada(e.target.value)
          }}}></input>
      </div>    
      <div className='loop-container'>
      <h4>Números divisores:{divisores.map((item,i)=> <p key={i}>{item}</p>)}</h4>  
      <h4>Divisores Primos:{primos.map((item,i)=><p key={i}>{item}</p>)} </h4>
      </div>

    </dir>
  )
}
