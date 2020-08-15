import React, { Component } from 'react'
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import './calculator.less'
import Header from '../component/Header';
import Button from '../component/Button';

export default class Calculator extends Component {
    state = {
        display: '',
    }

    calculatorDis = (event) => {
        const size = this.state.display.length;
        const last = this.state.display[size - 1];

        if (size === 0 && !event.target.value.match('[0-9]')) {
            alert('输入错误');
        } else if (size > 0 && !last.match('[0-9]') && !event.target.value.match('[0-9]')) {
            alert('输入错误,请输入数字');
        } else {
            this.setState({
                display: this.state.display + event.target.value,
            })
        }
        if (event.target.value === 'clear') {
            this.setState({
                display: '',
            })
        }
        if (event.target.value === '=') {
            this.setState({
                display: this.state.display + '=' + eval(this.state.display),
            })
        }

    }
    render() {
        return (
            <div className='calculator'>
                <Header></Header>
                <div className='cal-body'>
                    <h1>在线计算器</h1>
                    <div className='main'>
                        <br></br>
                        <br></br>
                        <div className='display'>
                            <p>{this.state.display}</p>
                        </div>
                        <div className='btn'>
                            <Button button={['+', '-', '*']} order='yellowLine' cal={this.calculatorDis}></Button>
                            <Button button={[7, 8, 9]} order='originLine' cal={this.calculatorDis}></Button>
                            <Button button={[4, 5, 6]} order='originLine' cal={this.calculatorDis}></Button>
                            <Button button={[1, 2, 3]} order='originLine' cal={this.calculatorDis}></Button>
                            <Button button={[0, 'clear', '=']} order='fourLine' cal={this.calculatorDis}></Button>
                        </div>
                    </div>
                    <Link to='/'>回到主页</Link>
                </div>
            </div>
        )
    }
}
