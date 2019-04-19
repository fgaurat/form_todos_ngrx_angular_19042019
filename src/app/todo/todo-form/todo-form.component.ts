import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoForm = this.fb.group({
    title: [''],
    completed: [false],
    dueDate: ['']
  });

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    // this.todoForm.valueChanges.subscribe(data => console.log(data));
  }
  submit() {
    const todo = this.todoForm.value;

  }
}
