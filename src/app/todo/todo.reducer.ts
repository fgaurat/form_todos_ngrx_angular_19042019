import { Action } from '@ngrx/store';
import { ActionTypes, LoadedTodo } from './todo.actions';
const todos = [];

const initialState = {todos};

export function todoReducer(state = initialState, action: Action) {
  console.log(action);
  let newState = {};
  switch (action.type) {
    case ActionTypes.LoadTodo:
      newState = Object.assign({}, { todos });
      return newState;
      break;
    case ActionTypes.LoadedTodo:
      newState = {...state, todos: (action as LoadedTodo).payload };
      return newState;
      break;

    default:
      return state;
  }
}
