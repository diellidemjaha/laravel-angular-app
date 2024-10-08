import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:8000/api/todos'; // Example API URL

  constructor(private http: HttpClient) {}

  getTodos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addTodo(title: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { title, completed: false });
  }

  updateTodo(id: number, todoData: { title: string, completed: boolean }): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, todoData); // Use PUT method for full updates
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
