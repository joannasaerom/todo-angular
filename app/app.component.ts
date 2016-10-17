import {  Component } from '@angular/core';
import {  Task  } from './task.model';


@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
    <task-list
      [childTaskList]="masterTaskList"
      (clickSender)="showDetails($event)"
    ></task-list>
    <edit-task
      [childSelectedTask]="selectedTask"
      (doneClickedSender)="finishedEditing()"
    ></edit-task>
    <new-task
      (newTaskSender)="addTask($event)"
    ></new-task>
  </div>
  `
})

export class AppComponent {
  public masterTaskList: Task[] = [
    new Task("Create app", 0),
    new Task("Learn kungfu", 1),
    new Task("Rewatch movie", 2),
    new Task("Do laundry", 3)
  ];
  selectedTask: Task = null;
  showDetails(clickedTask: Task){
    this.selectedTask = clickedTask;
  }
  finishedEditing(){
    this.selectedTask = null;
  }
  addTask(newTaskFromChild: Task){
    this.masterTaskList.push(newTaskFromChild);
  }
}
