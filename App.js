import {useRef, useState} from 'react';
import Vector from './Vector.png';
import './App.css';
import round from './round.png'

import circle from './circle.png';

export default function App() {
  
  let [demo4,setdemo4] = useState();
  let [demo1,setdemo1] = useState();
  let [demo2,setdemo2] = useState();
  let [demo3,setdemo3] = useState();
  let [demo5,setdemo5] = useState();
  let [demo6,setdemo6] = useState();
  let [demo7,setdemo7] = useState();
  let [demo8,setdemo8] = useState();
  let [demo9,setdemo9] = useState();
  let [data,setdata] = useState([0,0,0,0,0,0,0,0,0,0]);
  let [count,setcount] = useState(0);
  let [check,setcheck] = useState('true');
  let [cond,setcond] = useState('');
  let [user,setuser] = useState(0);
  let [tie,settie] = useState(0);
  let [cpu , setcpu] = useState(0);

 // let [change,setchange] = useState('Click');
 //implement the logic to only fill the remaining boxes
  const reset=()=>{
    demo1 = '';
    setdemo1(demo1);
    setcheck('true');
    data=[0,0,0,0,0,0,0,0,0,0];
    setdata(data);
    console.log(data);
    count=0;
    setcount(count);
    demo2 = '';
    setdemo2(demo2);
    demo3 = '';
    setdemo3(demo3);
     demo4 = '';
    setdemo4(demo4);
     demo5 = '';
    setdemo5(demo5);
     demo6 = '';
    setdemo6(demo6);
     demo7 = '';
    setdemo7(demo7);
     demo8 = '';
    setdemo8(demo8);
     demo9 = '';
    setdemo9(demo9);
    
  }

  const handleClick = (e,num) => {
   
    if(check=='true'){
      console.log(check);
    
   // e.target.innerHTML = `<img src='${Vector}'>`;
   //e.target.innerHTML = `X`;
    //console.log(typeof(num));
    if(num==1){
      demo1='X';
      setdemo1(demo1);
    }
    if(num==2){
      demo2='X';
      setdemo2(demo2);
    }
    if(num==3){
      demo3='X';
      setdemo3(demo3);
    }
    if(num==4){
      demo4='X';
      setdemo4(demo4);
    }
    if(num==5){
      demo5='X';
      setdemo5(demo5);
    }
    if(num==6){
      demo6='X';
      setdemo6(demo6);
    }
    if(num==7){
      demo7='X';
      setdemo7(demo7);
    }
    if(num==8){
      demo8='X';
      setdemo8(demo8);
    }
    if(num==9){
      demo9='X';
      setdemo9(demo9);
    }
    data[num]= 1;
    setdata(data);
    setcount(++count);
    console.log(data);
    if(data[1]==data[2] && data[2]==data[3] && data[3]!=0 && check=='true'){
      console.log('Congratulations , you have won!');
      check='false';
      setcheck(check);
      setcond('Congratulations , you have won!');
      setuser(++user);
    }
    if(data[4]==data[5] && data[5]==data[6] && data[6]!=0 && check=='true'){
      console.log('Congratulations , you have won!');
      check='false';
      setcheck(check);
      setcond('Congratulations , you have won!');
      setuser(++user);
    }
    if(data[7]==data[8] && data[8]==data[9] && data[9]!=0 && check=='true'){
      console.log('Congratulations , you have won!');
      check='false';
      setcheck(check);
      setcond('Congratulations , you have won!');
      setuser(++user);
    }
    if(data[1]==data[4] && data[4]==data[7] && data[7]!=0 && check=='true'){
      console.log('Congratulations , you have won!');
      check='false';
      setcheck(check);
      setcond('Congratulations , you have won!');
      setuser(++user);
    }
    if(data[2]==data[5] && data[5]==data[8] && data[8]!=0 && check=='true'){
      console.log('Congratulations , you have won!');
      check='false';
      setcheck(check);
      setcond('Congratulations , you have won!');
      setuser(++user);
    }
    if(data[3]==data[6] && data[6]==data[9] && data[3]!=0 && check=='true'){
      console.log('Congratulations , you have won!');
      check='false';
      setcheck(check);
      setcond('Congratulations , you have won!');
      setuser(++user);
    }
    if(data[1]==data[5] && data[5]==data[9] && data[9]!=0 && check=='true'){
      console.log('Congratulations , you have won!');
      check='false';
      setcheck(check);
      setcond('Congratulations , you have won!');
      setuser(++user);
    }
    if(data[3]==data[5] && data[5]==data[7] && data[3]!=0 && check=='true'){
      console.log('Congratulations , you have won!');
      check='false';
      setcheck(check);
      setcond('Congratulations , you have won!');
      setuser(++user);
    }
    if(check=='true'){
    if(count<9){
    let p=0;
    for(let i=0; ;i++){
    let randomNumber = Math.floor(Math.random() * 10);
    if(randomNumber===0){
      continue;
    }
    else{
    if(data[randomNumber]===0){
       p=randomNumber;
       break;
    }
  }
}


    
    if(p===4){
      demo4='O';
      setdemo4(demo4);
      data[p]=2;
      setdata(data);
      console.log(data);
      setcount(++count);

    }

    if(p===1){
      demo1='O';
      setdemo1(demo1);
      data[p]=2;
      setdata(data);
      console.log(data);
      setcount(++count);
    }

    if(p===2){
      demo2='O';
      setdemo2(demo2);
      data[p]=2;
      setdata(data);
      console.log(data);
      setcount(++count);
    }

    if(p===3){
      demo3='O';
      setdemo3(demo3);
      data[p]=2;
      setdata(data);
      console.log(data);
      setcount(++count);
    }

    if(p===5){
      demo5='O';
      setdemo5(demo5);
      data[p]=2;
      setdata(data);
      console.log(data);
      setcount(++count);
    }

    if(p===6){
      demo6='O';
      setdemo6(demo6);
      data[p]=2;
      setdata(data);
      console.log(data);
      setcount(++count);
    }

    if(p===7){
      demo7='O';
      setdemo7(demo7);
      data[p]=2;
      setdata(data);
      console.log(data);
      setcount(++count);
    }

    if(p===8){
      demo8='O';
      setdemo8(demo8);
      data[p]=2;
      setdata(data);
      console.log(data);
      setcount(++count);
    }

    if(p===9){
      demo9='O';
      setdemo9(demo9);
      data[p]=2;
      setdata(data);
      console.log(data);
      setcount(++count);
    }
    if(data[1]==data[2] && data[2]==data[3] && data[3]!=0 && check=='true'){
      console.log('Congratulations , PC has won!');
      check='false';
      setcheck(check);
      setcond('Oops , PC has won!');
      setcpu(++cpu);
    }
    if(data[4]==data[5] && data[5]==data[6] && data[6]!=0 && check=='true'){
      console.log('Congratulations , PC has won!');
      check='false';
      setcheck(check);
      setcond('Oops , PC has won!');
      setcpu(++cpu);
    }
    if(data[7]==data[8] && data[8]==data[9] && data[9]!=0 && check=='true'){
      console.log('Congratulations , PC has won!');
      check='false';
      setcheck(check);
      setcond('Oops , PC has won!');
      setcpu(++cpu);
    }
    if(data[1]==data[4] && data[4]==data[7] && data[7]!=0 && check=='true'){
      console.log('Congratulations , PC has won!');
      check='false';
      setcheck(check);
      setcond('Oops , PC has won!');
      setcpu(++cpu);
    }
    if(data[2]==data[5] && data[5]==data[8] && data[8]!=0 && check=='true'){
      console.log('Congratulations , PC has won!');
      check='false';
      setcheck(check);
      setcond('Oops , PC has won!');
      setcpu(++cpu);
    }
    if(data[3]==data[6] && data[6]==data[9] && data[9]!=0 && check=='true'){
      console.log('Congratulations , PC has won!');
      check='false';
      setcheck(check);
      setcond('Oops , PC has won!');
      setcpu(++cpu);
    }
    if(data[1]==data[5] && data[5]==data[9] && data[9]!=0 && check=='true'){
      console.log('Congratulations , PC has won!');
      check='false';
      setcheck(check);
      setcond('Oops , PC has won!');
      setcpu(++cpu);
    }
    if(data[3]==data[5] && data[5]==data[7] && data[7]!=0 && check=='true'){
      console.log('Congratulations , PC has won!');
      check='false';
      setcheck(check);
      setcond('Oops , PC has won!');
      setcpu(++cpu);
    }
    }
    } 
    }

    if(check=='true' && count==9){
      settie(++tie);
      setcond('Oops , its a tie!');
      setcheck('false');
    }
  };

  return (
    <div>
      <div className='big_container'>
        <div className='inner_container'><br/><br/>
        <span className='box'>TURN</span>&emsp;&emsp;&emsp;
        <span className='refresh'><img src={round} /></span>
        <br/><br/>
     <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <span className='design' onClick={(e)=>{handleClick(e,1)}}><p className='pos_text'>{demo1}</p></span>&emsp;
      <span className='design'  onClick={(e)=>{handleClick(e,2)}}><p className='pos_text'>{demo2}</p></span>&emsp;
      <span className='design'  onClick={(e)=>{handleClick(e,3)}}><p className='pos_text'>{demo3}</p></span>
      </div> <br/>
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <span className='design'  onClick={(e)=>{handleClick(e,4)}}><p className='pos_text'>{demo4}</p></span>&emsp;
      <span className='design'  onClick={(e)=>{handleClick(e,5)}}><p className='pos_text'>{demo5}</p></span>&emsp;
      <span className='design'  onClick={(e)=>{handleClick(e,6)}}><p className='pos_text'>{demo6}</p></span>
      </div> <br/>
     <div style={{ display: 'flex', justifyContent: 'space-evenly' }}> 
      <span className='design'  onClick={(e)=>{handleClick(e,7)}}><p className='pos_text'>{demo7}</p></span>&emsp;
      <span className='design' onClick={(e)=>{handleClick(e,8)}}><p className='pos_text'>{demo8}</p></span>&emsp;
      <span className='design'  onClick={(e)=>{handleClick(e,9)}}><p className='pos_text'>{demo9}</p></span>
      </div><br/>
      <div className='win'>{cond}</div><br/>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <span className='quit'><p className='Quit'>QUIT</p></span>
        <span className='next_round' onClick={()=>{reset()}}><p className='Quit'>NEXT ROUND</p></span>
      </div><br/>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}> 
      <span className='you'>
        <div className='first_line'>X(YOU)</div>
        <div className='score'>{user}</div>
      </span>&emsp;
      <span className='tie'>
      <div className='first_line'>TIES</div>
        <div className='score'>{tie}</div>
      </span>&emsp;
      <span className='computer'>
      <div className='first_line'>O(CPU)</div>
        <div className='score'>{cpu}</div>
        </span>
      </div>
    </div>
    </div>
    </div>
  );
}
