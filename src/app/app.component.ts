import { Component} from '@angular/core';

interface Task {
  text: string
  id: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  tasks: Task[] = []
  tasksID: number[] = []
  
  private getRandomInt = (max: number): number =>  {
    return Math.floor(Math.random() * Math.floor(max))
  }

  private SetID = (): number => {
    let newID = this.getRandomInt(100)
    if( this.tasksID.find(id => id === newID ) != undefined ){
      this.SetID()
    }
    this.tasksID.push(newID)
    return newID
  }

  addTask = (task: Task): void => {
    task.id = this.SetID()
    this.tasks.push(task)
  }

  deleteTask = (id: number): void => {
    let deleteTask = this.tasks.find(task => task.id === id)
    let indexTask = this.tasks.indexOf(deleteTask)
    this.tasks.splice(indexTask, 1)
  }
}
