import React, { useEffect, useState } from "react";
import styled from "styled-components";
import rect from './rect.png';
import rect2 from './rect2.png';
import Component from './Components/Component'
import Gameplay from './Components/Gameplay'
import { Route , Routes } from "react-router-dom";

function App() {

  const [advice, setAdvice] = useState();
    const [id, setid] = useState();

    useEffect(() => {
        const url = "https://api.adviceslip.com/advice";

        let interval = setInterval(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.slip.id);
                setid(json.slip.id);
                console.log(json.slip.advice);
                setAdvice(json.slip.advice);
            }  catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
      },60000)
        return () => {
          clearInterval(interval);
      }
    }, []);
  return (
    <>
      
      
      <Wrapper>
            <Paragraph1>Quote #{id}</Paragraph1>
            <Paragraph2>"{advice}"</Paragraph2>
            <Paragraph3>
                <Round><img src={rect}></img></Round>
                <Round1><img src={rect2}></img></Round1>
                </Paragraph3>
        </Wrapper>
       {/* <span>
      <Component />
  </span>*/}
      <Routes>
        <Route path="/" element={<Component />} />
        
      
      
      
      <Route path="/gameplay" element={<Gameplay />} />
      </Routes>
    </>
  );
}

export default App;

const Wrapper = styled.div`
    width: 290px;
    height: 282px;
    margin-top : 465px;
    margin-left: 68px;
    position: absolute;
    border-radius: 18px;
    background: #192A32;
`;

const Paragraph1 = styled.p`
font-family: DM Sans , 'sans-serif';
font-size: 26px;
font-weight: 800;
line-height: 34px;
letter-spacing: 0em;
text-align: center;
color: #31C4BE;
`;

const Paragraph2 = styled.p`
font-family: DM Sans , 'sans-serif';
font-size: 24px;
font-weight: 800;
line-height: 31px;
letter-spacing: 0em;
text-align: center;
color: #F2B237;
`;

const Paragraph3 = styled.div`
background-color: #31C4BE;
border-radius: 50%;
width: 50px;
height: 50px;
margin: auto;
`;

const Round = styled.p`
margin-left: 20px;
margin-top : 10px;
position: absolute;
`;

const Round1 = styled.p`
margin-left: 25px;
position: absolute;
`;

