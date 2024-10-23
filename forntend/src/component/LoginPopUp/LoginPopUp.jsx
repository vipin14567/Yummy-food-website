import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './LoginPopUP.css'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"

const LoginPopUp = ({setShowLogin}) => {

  const{ setToken } = useContext(StoreContext);
  const [currState , setCurrState] = useState("Sign Up")

  const [data , setData] = useState({
    name:"",
    email:"",
    password:""
  });

  const onChangeHandler = (event) =>{
      const name = event.target.name;
      const value = event.target.value;
      setData((data) => ({...data,[name]:value}));
  }

  const onLogin = async(event) => {
    event.preventDefault();
    let newUrl = 'http://localhost:4000';
    if(currState === 'Login'){
    newUrl += `/api/user/login`
    }
    else{
      newUrl += `/api/user/register`
    }

    const response = await axios.post(newUrl,data);

    if(response.data.success){
    setToken(response.data.token)
    localStorage.setItem("token",response.data.token)
    alert(response.data.message)
    setShowLogin(false);
    }
    else{
    alert(response.data.message)
    alert(
    "error occured"
    )
    }
  }


  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container" >
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img src={assets.cross_icon} alt="" onClick={() =>setShowLogin(false)}/>
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? <></>:
          <input name='name' onChange={onChangeHandler} value ={data.name} 
          type="text" 
          placeholder='Your name' 
          required/>
          }
          <input name='email' 
          onChange={onChangeHandler} 
          value={data.email} type="text" 
          placeholder='Your email' required/>


          <input name='password' 
          onChange={onChangeHandler} 
          value={data.password} 
          type="password" 
          placeholder='Your password' 
          required/>


        </div>
        <button type='submit'>{currState === "Sign Up" ? 
        "CreateAccount" : 
        "Login"}</button>


        <div className="login-popup-consition">
          <input type="checkbox" required />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        {currState === "Login" ?
        <p>create a new account ? <span onClick={() =>setCurrState("Sign Up")}>Click here!!</span></p>:
        <p>Already have a account <span onClick={() => setCurrState("Login")}>Login here</span></p>
        }
        
       
      </form>
    </div>
  )
}

export default LoginPopUp
