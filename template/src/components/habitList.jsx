import React, { Component } from 'react';
import AddHabit from './AddHabit';
import Habit from './habit';

class HabitList extends Component {
    state={
        habits:[{ id:0, title: 'Reading' },
        { id:1, title: 'Running' },
        { id:2, title: 'Studying' },
        { id:3, title: 'Cooking' },
        { id:4, title: 'Programming' }],
    }
    addList=(newItem)=>{
        this.setState({habits: this.state.habits([...this.habits, {id: this.habit.id++, title: "newItem"}])})
    }

    onDelete=(habitId)=>{
        // const filterItem=this.state.habits.filter(habit=> habit.id !== habitId)
        // console.log(filterItem)  
        this.setState({habits: this.state.habits.filter(habit=> habit.id !== habitId)})   
    }
    render() {
        
        return (
            <>
            <AddHabit addList={this.addList}/>
            <ul>{
                this.state.habits.map(habit=><Habit habit={habit} key={habit.id} onDelete={this.onDelete}/>)
                }
            </ul>
            </>
        );
    }
}

export default HabitList;