import React, {Component}  from 'react';
import classNames from 'classnames';
import './TodoItems.css';

class TodoItems extends Component {
    render(){
        return (
            <div className={classNames('todoItem', {
                'todoItem-complete': this.props.item.isComplete
            })}>
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}

export default TodoItems;