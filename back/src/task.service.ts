import { Injectable } from '@nestjs/common';
import { Task, TaskRequest, TaskUpdateRequest, DeleteResponse, TaskResponse } from './task.interface';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  createTask(task: Task): TaskResponse {
    const newTask = { ...task, id: Math.random().toString(36).substring(7) };
    this.tasks.push(newTask);
    return newTask;
  }

  getTask(request: TaskRequest): TaskResponse {
    const task = this.tasks.find(t => t.id === request.id);
    if (!task) {
        throw new Error(`Task with ID ${request.id} not found`);
    }
    return task;
  }

  updateTask(update: TaskUpdateRequest): TaskResponse {
    const index = this.tasks.findIndex(t => t.id === update.id);
    if (index === -1) {
        throw new Error(`Task with ID ${update.id} not found`);
    }
    this.tasks[index] = { ...update };
    return this.tasks[index];
  }

  deleteTask(request: TaskRequest): DeleteResponse {
    const index = this.tasks.findIndex(t => t.id === request.id);
    if (index === -1) return { success: false };
    this.tasks.splice(index, 1);
    return { success: true };
  }

  getAllTasks(): TaskResponse[] {
    return this.tasks;
  }
}
