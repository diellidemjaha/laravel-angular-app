import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // For [(ngModel)]
import { TodoComponent } from './todo/todo.component'; // Your to-do component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet, // for routing outlet in app.component.html
    RouterModule, // Import the RouterModule without forRoot
    TodoComponent
  
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-todo';
}
