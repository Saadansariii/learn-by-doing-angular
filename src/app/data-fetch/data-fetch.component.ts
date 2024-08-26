import {  HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-data-fetch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-fetch.component.html',
  styleUrls: ['./data-fetch.component.scss']
})
export class DataFetchComponent {
  allTodos: Todo[] = []; 
  randomTodo: Todo | null = null; 

  constructor(private http: HttpClient) {
    this.fetchAllTodos();
  }

 

  fetchAllTodos() {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos').subscribe(
      (result) => {
        this.allTodos = result; 
        this.getRandomTodo(); 
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

  getRandomTodo() {
    if (this.allTodos.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.allTodos.length); 
      this.randomTodo = this.allTodos[randomIndex]; 
    } else {
      console.error('No todos available to display');
    }
  }
}





