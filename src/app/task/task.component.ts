import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent{
  @Input() taskTxt: string
  @Input() taskID: number
  @Input() deleteTask: Function

  taskComplete: boolean = false
  taskCompleteBtn: boolean = false

  completeTask = (): void => {
    this.taskComplete = !this.taskComplete
    this.taskCompleteBtn = !this.taskCompleteBtn
  }
  
  taskDelete = (): void => {
    this.deleteTask(this.taskID)
  }
}
