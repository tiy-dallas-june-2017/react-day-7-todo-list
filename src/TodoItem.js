import React from 'react';

function TodoItem(props) {
  let chosenClass = '';
  if (props.item.isComplete) {
    chosenClass = 'done';
  }

  return (
    <li className={chosenClass} onClick={props.todoClick}>{props.item.text}</li>
  )
}

export default TodoItem;
