import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/addTask.component';
import { TaskComponent } from './task/task.component';
import { BlockTasksComponent } from './block-tasks/block-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TaskComponent,
    BlockTasksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
