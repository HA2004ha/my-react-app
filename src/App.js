import React ,{ useState } from 'react';
import {evaluate} from "mathjs"
import './App.css';
import Title from './components/title';
import Modal from './components/modal';
function App() {
  const [display,setDisplay] = useState("")
  const [expression,setExpression] = useState([])
  const [showmodal,setShowmodal] = useState(localStorage.getItem("showmodal") !== "false")
  const handleResult = () =>{
    const result = expression.join("")
    const res = evaluate(result)
    
    setDisplay(res)
    
    setExpression([res])

  }

  const handleClick = (value) => {
    setDisplay(value)
    setExpression([...expression,value])

  }
  const handleClose = ()=> {
      setShowmodal(false)
      localStorage.setItem("showmodal", "false");
  }
  return (
    <div className='App'>
        {<Title title="my fav movie"/>  }    
        <h3 className="display">{display}</h3>
        <span className='expression'>{expression}</span>

        <section className='panel'>
          <section className='numbers'>
            <button onClick={()=> handleClick(7)}>7</button>
            <button onClick={()=> handleClick(8)}>8</button>
            <button onClick={()=> handleClick(9)}>9</button>
            
            <button onClick={()=> handleClick(4)}>4</button>
            <button onClick={()=> handleClick(5)}>5</button>
            <button onClick={()=> handleClick(6)}>6</button>

            <button onClick={()=> handleClick(1)}>1</button>
            <button onClick={()=> handleClick(2)}>2</button>
            <button onClick={()=> handleClick(3)}>3</button>

            <button onClick={()=> handleClick(0)}>0</button>
          </section>
          <section className='operation'> 
          <button onClick={()=> handleClick("/")}>/</button>
          <button onClick={()=> handleClick("*")}>*</button>
          <button onClick={()=> handleClick("-")}>-</button>
          <button onClick={()=> handleClick("+")}>+</button>
          <button onClick={()=> handleResult()}>=</button>
          </section>
        </section>
       {showmodal &&< Modal handleClose = {handleClose}>
        {console.log(showmodal)}
          <h2>10% percent</h2>
          <p>somthing about percent ...</p>
        </Modal>}
    </div>
  );
}

export default App;
