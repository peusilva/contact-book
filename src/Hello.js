import React from 'react';
import './Hello.css';

class Hello extends React.Component {
    render() {
        return (
            <div>
            <h1 className="f1 tc">Hello World</h1>
            <p className='tc'>{this.props.greeting}</p>
            </div>
        )
    }
}
export default Hello;