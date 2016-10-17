import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component ({
  selector: 'new-task',
  template: `
  <h1>New Task</h1>
  <div>
    <label>Enter task description</label>
    <input #newDescription>
  </div>
  <div>
    <label>Select priority</label>
    <select #newPriority>
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
    </select>
  <div>
    <label>Enter task id</label>
    <input #newId>
    <button (click)="addClicked(newDescription.value, newId.value, newPriority.value)">Add</button>
  </div>
  `
})

export class NewTaskComponent{
  @Output() newTaskSender = new EventEmitter();
  addClicked(description: string, id: number, priority: string){
    var newTaskToAdd: Task = new Task(description, id, priority);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
