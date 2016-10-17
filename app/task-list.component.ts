import {  Component, Input, Output, EventEmitter } from '@angular/core';
import {  Task  } from './task.model';

@Component({
  selector: 'task-list',
  template: `
  <select (change)="completenessMenu($event.target.value)">
    <option value="all">Show All</option>
    <option value="isDone">Show Done</option>
    <option value="notDone" selected="selected">Show Not Done</option>
  </select>
  <select (change)="priorityMenu($event.target.value)">
    <option value="Low">Low</option>
    <option value="Medium">Medium</option>
    <option value="High" selected="selected">High</option>
    <option value="All">View All Priorities</option>
  </select>
  <div *ngFor = "let currentTask of childTaskList | completeness:selectedCompleteness | priority:selectedPriority">
    <h3>{{currentTask.description}}</h3>
    <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
  </div>
  `
})

export class TaskListComponent{
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
  public selectedCompleteness: string = "notDone";
  completenessMenu(optionFromMenu){
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
  public selectedPriority: string = "High";
  priorityMenu(optionFromMenu){
    this.selectedPriority = optionFromMenu;
    console.log(this.selectedPriority);
  }
}
