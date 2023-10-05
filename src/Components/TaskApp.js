import Task from './Task';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTask,
  completeTask,
  editTask,
  removeTask,
} from '../redux/slices/TasksSlice';
import { useState } from 'react';

const TaskApp = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState('');
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const handleAddTask = (task) => {
    if (task.length > 0) {
      dispatch(addTask(task));
    }
  };

  const handleRemoveTask = (task) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(removeTask(task));
    }
  };

  const handleCompleteTask = (task) => {
    dispatch(completeTask(task));
  };

  const enableEditingTask = (task) => {
    setIsEditing((prev) => !prev);
    setEditedTask(task);
  };

  const handleEditTask = (task) => {
    dispatch(editTask(task));
  };

  return (
    <div className="taskApp">
      <Header
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        handleAddTask={handleAddTask}
        editedTask={editedTask}
        handleEditTask={handleEditTask}
      />
      <div>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <Task
              isEditing={isEditing}
              enableEditingTask={enableEditingTask}
              handleRemoveTask={handleRemoveTask}
              handleCompleteTask={handleCompleteTask}
              task={task}
              key={task.id}
              isLast={index === tasks.length - 1}
            />
          ))
        ) : (
          <span className="h-full flex text-[#fff] text-center text-sm font-bold justify-center items-center">
            <p>You have no tasks at the moment. Feel free to add some!</p>
          </span>
        )}
      </div>
    </div>
  );
};

export default TaskApp;
