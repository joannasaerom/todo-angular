import {  NgModule  } from '@angular/core';
import {  BrowserModule } from '@angular/platform-browser';
import {  AppComponent  } from './app.component';
import {  FormsModule } from '@angular/forms';
import {  TaskListComponent } from './task-list.component';
import {  EditTaskComponent } from './edit-task.component';
import {  NewTaskComponent  } from './new-task.component';
import {  CompletenessPipe  } from './completeness.pipe';
import {  PriorityPipe  } from './priority.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TaskListComponent,
    EditTaskComponent,
    NewTaskComponent,
    CompletenessPipe,
    PriorityPipe,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {  }
