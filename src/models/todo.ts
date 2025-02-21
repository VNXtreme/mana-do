export enum TodoStatus {
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
}

export type EnhanceTodoStatusType = TodoStatus | 'ALL';

export interface Todo {
  id: string;
  user_id: string;
  content: string;
  status?: TodoStatus;
  created_date: string;
}
export interface IToDoState {
  showing: EnhanceTodoStatusType;
  todos: Todo[];
}
