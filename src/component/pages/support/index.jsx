import React, { useState } from 'react'
import Button from '../button/button';
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
import { supportUs } from "../../Redux/support-redux/support-action";


const Home = () => {
  const money = useSelector(state=>state.supportReducer);
  const dispatch = useDispatch();
  const supportna = (money)=>{
    console.log(typeof money);
    dispatch(supportUs(parseInt(money)));
  }
  return (  
    <div className='text-end container my-5'>
        <Button supportna={supportna} Support='Support Us'></Button>
        <h2 className="text-success">{parseInt(money) } $</h2>x
    </div>
  )
}

export default Home