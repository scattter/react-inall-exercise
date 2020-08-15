import React, { Component } from 'react'
import Header from '../component/Header'
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import './timer.less'

export default class Timer extends Component {

    state = {
        display: '',
        time: '0',
        btnDisable: false,
        btnContext: 'Start',
    }

    setTime = () => {
        if (event.target.value >= 0) {
            this.setState({
                time: event.target.value,
            })
        }
    }

    render() {
        let timeChange;
        let ti = this.state.time;
        //关键在于用ti取代time进行计算和判断，因为time在render里不断刷新，但在方法中不会进行刷新
        const clock = () => {
            if (ti > 0) {
                //当ti>0时执行更新方法
                ti = ti - 1;
                this.setState({
                    time: ti,
                });
            } else {
                //当ti=0时执行终止循环方法
                clearInterval(timeChange);
                this.setState({
                    btnDisable: false,
                    time: 0,
                    btnContext: 'End',
                });
            }
        };

        const sendCode = () => {
            this.setState({
                btnDisable: true,
            });
            //每隔一秒执行一次clock方法
            timeChange = setInterval(clock, 1000);
        };
        return (
            <div className='timer'>
                <Header></Header>
                <div className='timer-body'>
                    <h1>在线倒计时器</h1>
                    <div className='timer-set'>
                        <label>设置时间</label>
                        <input type='number' min="0" onChange={this.setTime}></input>
                        <input type='button' value={this.state.btnContext} onClick={sendCode} disabled={this.state.btnDisable}></input>
                    </div>
                    <div className='timer-display'>
                        <p>{this.state.time}  Second</p>
                    </div>
                    <Link to='/'>回到主页</Link>
                </div>
            </div>
        )
    }
}
