import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare, faMinusSquare, faTrash} from '@fortawesome/free-solid-svg-icons'

class Habit extends Component {
    state={
        count:0,
    }
    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }
    handleDecrement=()=>{
        const count = this.state.count-1;   
        this.setState({count:count < 0 ? 0 : count})
    }
    handleDelete=(e)=>{
        console.log('delete', this.props.habit.id)
        this.props.onDelete(this.props.habit.id)
    }
    render() {
        return (
           <li>
            <h1>{this.props.habit.title}</h1>
            <p>{this.state.count}</p>
            <button className="increment">
                <FontAwesomeIcon icon={faPlusSquare} onClick={this.handleIncrement}/>
            </button>
            <button className="decrement">
            <FontAwesomeIcon icon={faMinusSquare} onClick={this.handleDecrement}/>
            </button>
            <button className="trash">
                <FontAwesomeIcon icon={faTrash} onClick={this.handleDelete}/>
            </button>
           </li>
        );
    }
}

export default Habit;