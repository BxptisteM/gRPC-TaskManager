export interface Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
  }
  
  export interface TaskRequest {
    id: string;
  }
  
  export interface TaskUpdateRequest {
    id: string;
    title: string;
    description: string;
    completed: boolean;
  }
  
  export interface TaskResponse {
    id: string;
    title: string;
    description: string;
    completed: boolean;
  }
  
  export interface DeleteResponse {
    success: boolean;
  }

  export interface TaskList {
    tasks: TaskResponse[];
  }
  
  export interface Empty {}
  