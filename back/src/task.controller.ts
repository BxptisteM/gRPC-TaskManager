import { Controller } from '@nestjs/common';
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { TaskService } from './task.service';
import { Task, TaskRequest, TaskUpdateRequest, DeleteResponse, TaskResponse, TaskList, Empty } from './task.interface';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @GrpcMethod('TaskService', 'ListTasks')
  async listTasks(data: Empty, metadata: any): Promise<TaskList> {
    const tasks = this.taskService.getAllTasks();
    return { tasks };
  }

  @GrpcMethod('TaskService', 'CreateTask')
  createTask(data: Task): TaskResponse {
    return this.taskService.createTask(data);
  }

  @GrpcMethod('TaskService', 'GetTask')
  getTask(data: TaskRequest): TaskResponse {
    return this.taskService.getTask(data);
  }

  @GrpcMethod('TaskService', 'UpdateTask')
  updateTask(data: TaskUpdateRequest): TaskResponse {
    return this.taskService.updateTask(data);
  }

  @GrpcMethod('TaskService', 'DeleteTask')
  deleteTask(data: TaskRequest): DeleteResponse {
    return this.taskService.deleteTask(data);
  }
}
