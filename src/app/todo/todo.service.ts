import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(environment.URL);
  }

  delete(todo: Todo): Observable<any> {
    const url = `${environment.URL}/${todo.id}`;
    return this.http.delete<any>(url);
  }

  save(todo: Todo): Observable<any> {
    return this.http.post<any>(environment.URL, todo, httpOptions);
  }
}
