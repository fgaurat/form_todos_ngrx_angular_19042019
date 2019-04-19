import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable, merge } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Todo } from '../todo';
import { Store, select } from '@ngrx/store';
import { LoadTodo, DeleteTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'title',
    'completed',
    'dueDate',
    'action'
  ];

  todos$: Observable<Todo[]>;

  constructor(private store: Store<{ todos: [] }>) {}

  ngOnInit() {
    this.todos$ = this.store.pipe(
      select('stateTodos'),
      tap(_ => console.log(_)),
      map(obj => obj.todos)
    );

    this.store.dispatch(new LoadTodo());
  }

  delete(todo: Todo): void {
    this.store.dispatch(new DeleteTodo(todo));
  }
}
