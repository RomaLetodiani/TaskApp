import {
  BiCircle,
  BiDotsVerticalRounded,
  BiXCircle,
  BiEdit,
  BiCheckCircle,
} from 'react-icons/bi';
import React, { useState } from 'react';

const Task = (props) => {
  const [popUp, setPopUp] = useState(false);

  return (
    <div>
      <button onClick={() => props.handleCompleteTask(props.task)}>
        {props.task.completed ? <BiCheckCircle /> : <BiCircle />}
      </button>
      <input
        disabled
        value={props.task.title}
        className={`${
          props.task.completed ? 'line-through text-[#6b60d2a1]' : ''
        }`}
      />
      {!props.isEditing && (
        <button onClick={() => setPopUp((prev) => !prev)}>
          <BiDotsVerticalRounded />
        </button>
      )}
      {popUp && (
        <div className={`${props.isLast ? 'lastPopup' : ''}`}>
          <button onClick={() => props.enableEditingTask(props.task)}>
            <BiEdit />
            <p>{props.isEditing ? 'Close' : 'Edit'}</p>
          </button>
          <button onClick={() => props.handleRemoveTask(props.task)}>
            <BiXCircle />
            <p>Delete</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default Task;
