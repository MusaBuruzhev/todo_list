// src/App.tsx
import React, { useState, useEffect } from 'react';
import TaskListComponent from './components/TaskList';
import { Task } from './models/Task';
import TaskService from './services/TaskService';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(TaskService.getTasks());

  // Загружаем задачи из TaskService при монтировании компонента
  useEffect(() => {
    setTasks(TaskService.getTasks());
  }, []);

  const handleAddTask = (title: string) => {
    TaskService.addTask(title);
    setTasks(TaskService.getTasks());
  };

  const handleDeleteTask = (id: number) => {
    TaskService.deleteTask(id);
    setTasks(TaskService.getTasks());
  };

  const handleToggleTask = (id: number) => {
    TaskService.toggleTaskCompletion(id);
    setTasks(TaskService.getTasks());
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter task"
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            const target = e.target as HTMLInputElement;
            handleAddTask(target.value.trim());
            target.value = '';
          }
        }}
      />
      <TaskListComponent tasks={tasks} onDelete={handleDeleteTask} onToggle={handleToggleTask} />
    </div>
  );
};

export default App;