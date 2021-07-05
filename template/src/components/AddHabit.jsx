import React, { Component } from 'react';

class AddHabit extends Component {
    state={
        text:'',
    }
    handleChange=(e)=>{
        const newItem=this.state.text(e.target.value)
        this.setState({text: newItem})
        console.log(this.text)
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange}/>
            </div>
        );
    }
}

export default AddHabit;