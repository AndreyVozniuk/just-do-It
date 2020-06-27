import {Component, Input} from '@angular/core'

@Component({
   selector: 'add-task',
   templateUrl: './addTask.component.html',
   styleUrls: ['./addTask.component.css']
})

export class AddTaskComponent {
   @Input() addTask: Function
   @Input() deleteTask: Function

   private taskAdd = (input: any): void => {
      if(input.value != ''){
         this.addTask({ text: input.value })
         input.value = ''
      }else{
         alert('You don`t write anything to the task, please try again =)')
      }
   }

   taskAddClick = (input: any): void => {
      this.taskAdd(input)
   }

   taskAddEnter = (e: any, input: any): void => {
      if(e.keyCode === 13)
         this.taskAdd(input)
   } 
}