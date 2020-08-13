import React, { Component } from 'react'
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import './calculator.less'
import Header from '../component/Header';
import Button from '../component/Button';

export default class Calculator extends Component {
    render() {
        return (
            <div className='calculator'>
                <Header></Header>
                <div className='cal-body'>
                    <h1>在线计算器</h1>
                    <div className='main'>
                        <br></br>
                        <br></br>
                        <div className='display'></div>
                        <div className='btn'>
                            <Button button={['+', '-', 'x']} order='yellowLine'></Button>
                            <Button button={[7, 8, 9]} order='originLine'></Button>
                            <Button button={[4, 5, 6]} order='originLine'></Button>
                            <Button button={[1, 2, 3]} order='originLine'></Button>
                            <Button button={[0, 'clear', '=']} order='fourLine'></Button>
                        </div>
                    </div>
                    <Link to='/'>回到主页</Link>
                </div>
            </div>
        )
    }
}
