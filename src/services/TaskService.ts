// src/services/TaskService.ts
import { Task } from '../models/Task';

class TaskService {
  private tasks: Task[] = this.loadTasksFromLocalStorage();

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string): void {
    const newTask = new Task(this.tasks.length + 1, title);
    this.tasks.push(newTask);
    this.saveTasksToLocalStorage();
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasksToLocalStorage();
  }

  toggleTaskCompletion(id: number): void {
    this.tasks = this.tasks.map(task =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    this.saveTasksToLocalStorage();
  }

  private saveTasksToLocalStorage(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  private loadTasksFromLocalStorage(): Task[] {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  }
}

export default new TaskService();