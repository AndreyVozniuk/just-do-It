import { Component} from '@angular/core';
import { Input} from '@angular/core';

@Component({
  selector: 'block-tasks',
  templateUrl: './block-tasks.component.html',
  styleUrls: ['./block-tasks.component.css']
})
export class BlockTasksComponent{
  @Input() tasks: Object[]
  @Input() deleteTask: Function
}
