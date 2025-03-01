// src/components/TaskList.tsx
import React from 'react';
import TaskComponent from './Task';
import { Task } from '../models/Task';

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TaskListComponent: React.FC<TaskListProps> = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.length === 0 && <p>No tasks added yet.</p>}
      {tasks.map(task => (
        <TaskComponent key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TaskListComponent;