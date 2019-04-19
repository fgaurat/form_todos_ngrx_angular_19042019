import { Action } from '@ngrx/store';
import { Todo } from './todo';

export enum ActionTypes {
  AddTodo = '[TODO] ADD',
  DeleteTodo = '[TODO] DELETE',
  LoadTodo = '[TODO] LOAD',
  LoadedTodo = '[TODO] LOADED'
}

export class AddTodo implements Action {
  type = ActionTypes.AddTodo;
}
export class DeleteTodo implements Action {
  type = ActionTypes.DeleteTodo;
  constructor(public payload: Todo) {}
}

export class LoadTodo implements Action {
  type = ActionTypes.LoadTodo;
}
export class LoadedTodo implements Action {
  type = ActionTypes.LoadedTodo;
  payload: Todo[] = [];
}
