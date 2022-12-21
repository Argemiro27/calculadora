import React, { useState } from 'react';
import { Container } from './style';
import { Button } from '../components/Button/styles';

export const Home = () => {
  
  const[num,setNum] = useState(0);
  const [primnum, setPrimNum] = useState(0);
  const[operation,setOp] = useState();
  
  function inputNum(e){
    var input = e.target.id;
    if (num === 0) {
        setNum(input);
    }else{
        setNum(num + input);
    }
  }

  function clear() {
    setNum(0);
  }

  function operationHandler(e){
    var inputOp = e.target.id;
    setOp(inputOp);
    setPrimNum(num);
    setNum(0);
  }

  function calc(){
    switch(operation){
        case '+':
            setNum(parseFloat(primnum) + parseFloat(num));
            break;
        case '-':
            setNum(parseFloat(primnum) - parseFloat(num));
            break;
        case '*':
            setNum(parseFloat(primnum) * parseFloat(num));
            break;
        case '/':
            setNum(parseFloat(primnum) / parseFloat(num));
            break;
        case '%':
            setNum(num / 100);
            break;
        default:
            console.log();
    }
  }

  return (
    <>  
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap" rel="stylesheet"></link>
        <Container>
            <div className="calculator">
                <h3>Calculadora</h3><br/>
                <h1 className="result">{num}</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td><Button className="operation-keys" onClick={operationHandler} id="+">+</Button></td>
                                <td><Button className="operation-keys" onClick={operationHandler} id="-">-</Button></td>
                                <td><Button className="operation-keys" onClick={operationHandler} id="*">*</Button></td>
                                <td><Button className="operation-keys" onClick={operationHandler} id="/">/</Button></td>
                            </tr>
                        </tbody>
                    </table>
                      
                <div className="numberkeys">
                    <table>
                        <tbody>
                            <tr>
                                <td><Button onClick={inputNum} id="1">1</Button></td>
                                <td><Button onClick={inputNum} id="2">2</Button></td>
                                <td><Button onClick={inputNum} id="3">3</Button></td>
                                <td><Button className="operation-keys" onClick={operationHandler} id="%">%</Button></td>      
                            </tr>                 
                            <tr>
                                <td><Button onClick={inputNum} id="4">4</Button></td>  
                                <td><Button onClick={inputNum} id="5">5</Button></td>
                                <td><Button onClick={inputNum} id="6">6</Button></td>
                                <td><Button onClick={clear}>C</Button></td>     
                            </tr>
                            <tr>
                                <td><Button onClick={inputNum} id="7">7</Button></td>
                                <td><Button onClick={inputNum} id="8">8</Button></td>  
                                <td><Button onClick={inputNum} id="9">9</Button></td>  
                                <td><Button className="equal" onClick={calc}>=</Button></td>  
                            </tr>             
                            <tr>
                                <td><Button onClick={inputNum} id="0">0</Button></td>  
                                <td><Button onClick={inputNum} id=".">.</Button></td>
                                <td><Button style={{visibility:'hidden'}}></Button></td>
                                <td><Button style={{visibility:'hidden'}}></Button></td>
                            </tr>  
                        </tbody>          
                    </table>
                </div>          
            </div>
        </Container>     
    </>
  );
};

export default Home;

