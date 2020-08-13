import React from 'react';
import './home.less';
import heroImg from '../images/hero-image.png'
import Header from '../component/Header';
import timerImg from '../images/timer.png'
import calculatorImg from '../images/calculator.png'
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';

const Home = () => {
  return (<div className="home">
    <Header></Header>
    <img className='hero' src={heroImg}></img>
    <div className='title'>
      <p>在线实用工具</p>
    </div>
    <div className='tools'>
      <div className='tool1'>
        <img src={calculatorImg}></img>
        <Link to='/calculator'>计算器</Link>
      </div>
      <div className='tool2'>
        <img src={timerImg}></img>
        <Link to='/timer'>倒计时器</Link>
      </div>
    </div>
  </div>);
};

export default Home;