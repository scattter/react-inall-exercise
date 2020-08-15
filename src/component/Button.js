import React, { Component } from 'react'
import './button.less';

export default class Button extends Component {
    render() {
        const buttons = this.props.button;
        const btnClass = this.props.order;
        const clickDis = this.props.cal;
        return (
            <div className='btn-component'>
                <input type='button' className={btnClass} value={buttons[0]} onClick={clickDis}></input>
                <input type='button' className={btnClass} value={buttons[1]} onClick={clickDis}></input>
                <input type='button' className={btnClass} value={buttons[2]} onClick={clickDis}></input>
            </div>
        )
    }
}
