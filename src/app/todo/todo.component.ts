import { Component, OnInit } from '@angular/core';
import { Todo } from '../interface'
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  todo: Todo[] = [
    {
      task: "Fold clothes",
      completed: false
    },
    {
      task: "Put clothes in dresser",
      completed: false
    },
    {
      task: "Relax",
      completed: false
    },
    {
      task: "Try to pet cat",
      completed: true
    },
    {
      task: "Pet dog",
      completed: false
    },
    {
      task: "Be Awesome",
      completed: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  $scope.addTask = function (i) {
    todo.push({
        task: "";
        completed: false;
    });
  }

  $scope.removeTask = function (i) {
    todo.splice(i, 1);
  }
  
  completeTask = function() {
    return item.completed = true;
  };
}