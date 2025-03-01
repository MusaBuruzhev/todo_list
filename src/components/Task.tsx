// src/components/Task.tsx
import React from 'react';
import { Task } from '../models/Task';

interface TaskProps {
  task: Task;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TaskComponent: React.FC<TaskProps> = ({ task, onDelete, onToggle }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span
        style={{
          flex: 1,
          textDecoration: task.isCompleted ? 'line-through' : 'none',
          color: task.isCompleted ? '#aaa' : '#000',
        }}
      >
        {task.title}
      </span>
      <button onClick={() => onToggle(task.id)} style={{ marginRight: '8px' }}>
        {task.isCompleted ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => onDelete(task.id)}>Удалить</button>
    </div>
  );
};

export default TaskComponent;
