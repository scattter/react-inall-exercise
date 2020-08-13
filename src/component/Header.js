import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Link className='inthis' to='/'>HOME</Link>
                <Link className='inthis' to='/calculator'>在线计算器</Link>
                <Link className='inthis' to='/timer'>在线倒计时器</Link>
            </div>
        );
    }
}
export default Header;