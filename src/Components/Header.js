import React, { useEffect, useState } from 'react';

const Header = (props) => {
  const [task, setTask] = useState('');

  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    setEditValue(props.editedTask.title);
  }, [props.editedTask]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.handleAddTask(task);
    setTask('');
  };

  const onEditHandler = (e) => {
    e.preventDefault();
    let editedTaskObj = {
      ...props.editedTask,
      title: editValue,
    };
    props.handleEditTask(editedTaskObj);
    props.setIsEditing((prev) => !prev);
  };

  return (
    <header>
      {props.isEditing ? (
        <form onSubmit={onEditHandler}>
          <input
            autoFocus
            value={editValue || ''}
            onChange={(e) => setEditValue(e.target.value)}
            placeholder="Update your Task"
          />
          <button type="submit">EDIT</button>
        </form>
      ) : (
        <form onSubmit={onSubmitHandler}>
          <input
            autoFocus
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Type your Task here"
          />
          <button type="submit">ADD</button>
        </form>
      )}
    </header>
  );
};

export default Header;
