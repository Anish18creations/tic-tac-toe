import React , {useState} from 'react'
import './Component.css'
import Vector from './Vector.png'
import circle from './circle.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';


const notify = () => { 
    toast("Invite link copied" ,  {
        className: 'txt',
        position: toast.POSITION.TOP_RIGHT,
    });
};

function Component() {

    const [name, setName] = useState('');
    const [cpu, setcpu] = useState('');
    const navigate = useNavigate();
    
  
    function handleClick() {
      const name = 'X';
      setName(name);
      const cpu = 'O';
      setcpu(cpu);
      console.log('User input is ' , name);
      console.log('Computer input is ' , cpu);
    }
  
    
    function handleClick2() {
      const name = 'O';
      setName(name);
      const cpu = 'X';
      setcpu(cpu);
      console.log('User input is ' , name);
      console.log('Computer input is ' , cpu);
    }

  return (
    
    <div className='container'>
        <div className="inner_container">
            <div className="row_1">
                <span className="images">
                    <img src={Vector}></img> &emsp;
                    <img src={circle}></img>
                    </span>
                </div>
            <div className="pick_player"><br/>
                <div className="text">PICK PLAYER</div>
                <div className="choice">
              
                <button className='colour' onClick={handleClick}>&#10005;</button> &emsp;
                <button className='oval' onClick={handleClick2}>&#9900;</button>
              
            </div>
            </div>
            <button className="cpu" onClick={()=>{navigate('/gameplay', {state:{name,cpu}})}}>
            NEW GAME ( VS CPU )
            </button>
            <button className="human">
            NEW GAME ( VS HUMAN ) Coming soon
            </button>
            <button className="friend" onClick={notify}>
            Invite your friend
            </button>
            
        </div>
        
        
      
        <ToastContainer />
    
    </div>
    
  )
}

export default Component;