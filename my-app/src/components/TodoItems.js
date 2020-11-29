import React, {Component}  from 'react';
import './TodoItems.css';

class TodoItems extends Component {
    render(){
        let className = 'todoItem';
        if(this.props.item.isComplete){
            className += ' todoItem-complete';
        }
        return (
            <div class={className}>
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}

export default TodoItems;