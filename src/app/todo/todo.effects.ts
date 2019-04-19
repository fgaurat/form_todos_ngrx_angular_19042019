import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActionTypes, DeleteTodo } from './todo.actions';
import { mergeMap, map, tap } from 'rxjs/operators';
import { TodoService } from './todo.service';

@Injectable({ providedIn: 'root' })
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  @Effect()
  loadTodos$ = this.actions$.pipe(
    ofType(ActionTypes.LoadTodo),
    mergeMap(_ => this.todoService.getAll()),
    map(todos => ({ type: ActionTypes.LoadedTodo, payload: todos }))
  );

  @Effect()
  deleteTodo$ = this.actions$.pipe(
    ofType(ActionTypes.DeleteTodo),
    mergeMap((action: DeleteTodo) =>
      this.todoService.delete(action.payload)
    ),
    map(todos => ({ type: ActionTypes.LoadTodo}))
  );
}
