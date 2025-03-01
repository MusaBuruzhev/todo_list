// src/models/Task.ts
export class Task {
    id: number;
    title: string;
    isCompleted: boolean;
  
    constructor(id: number, title: string, isCompleted: boolean = false) {
      this.id = id;
      this.title = title;
      this.isCompleted = isCompleted;
    }
  }