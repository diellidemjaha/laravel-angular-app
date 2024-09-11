import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';  // For [(ngModel)]
import { HttpClientModule } from '@angular/common/http';  // For Http requests
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],  // Include necessary imports
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todos: any[] = [];
  newTodo = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  addTodo(): void {
    this.todoService.addTodo(this.newTodo).subscribe(todo => {
      this.todos.push(todo);
      this.newTodo = '';
    });
  }

  toggleTodoCompletion(todo: any): void {
    this.todoService.updateTodo(todo.id, {title: todo.title, completed: !todo.completed}).subscribe(() => {
      todo.completed = !todo.completed;
    });
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id !== id);
    });
  }
}
