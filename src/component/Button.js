import React, { Component } from 'react'
import './button.less';

export default class Button extends Component {
    render() {
        const buttons = this.props.button;
        const btnClass = this.props.order;
        // console.log(this.props.order);
        console.log(btnClass);
        return (
            <div className='btn-component'>
                <input type='button' className={btnClass} value={buttons[0]}></input>
                <input type='button' className={btnClass} value={buttons[1]}></input>
                <input type='button' className={btnClass} value={buttons[2]}></input>
            </div>
        )
    }
}
