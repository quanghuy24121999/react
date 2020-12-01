import React, {Component}  from 'react';
import classNames from 'classnames';
import './TodoItems.css';
import checkComplete from '../image/check-complete.svg';
import check from '../image/check.svg';

class TodoItems extends Component { 
    render(){
        const { item, onClick } = this.props;
        let checkUrl = check;
        if(item.isComplete) {
            checkUrl = checkComplete;
        }

        return (
            <div onClick={onClick} className={classNames('todoItem', {
                'todoItem-complete': item.isComplete
            })}>
                <img src={checkUrl} width={32} alt=""/>
                <p>{item.title}</p>
            </div>
        );
    }
}

export default TodoItems;